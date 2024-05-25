import { client, edgeql } from "@repo/db";
import config from "../config";
import { triggerEmail } from "./mail";

const getOrCreateUser = async (user: GetOrCreateUserProps) => {
  const person = await edgeql
    .select(edgeql.Person, (Person) => ({
      ...edgeql.Person["*"],
      filter_single: edgeql.op(Person.email, "=", user.email),
    }))
    .run(client);

  if (!person) {
    const newUserBody = {
      password: "",
      email: user.email,
      avatar: user.image || "",
      first_name: user.name.split(" ")[0] || "",
      last_name: user.name.split(" ").slice(1).join(" ") || "",
    };

    await edgeql.insert(edgeql.Person, newUserBody).unlessConflict().run(client);

    await edgeql
      .insert(edgeql.TemplateConfig, {
        content: config,
        creator: edgeql.select(edgeql.Person, (Person) => ({
          ...edgeql.Person["*"],
          filter_single: edgeql.op(Person.email, "=", user.email),
        })),
      })
      .run(client);

    const person = await edgeql
      .select(edgeql.Person, (Person) => ({
        ...edgeql.Person["*"],
        filter_single: edgeql.op(Person.email, "=", user.email),
      }))
      .run(client);

    return { ...person, is_new: true };
  }

  return { ...person, is_new: false };
};

const subscribeToNewsletter = async (email: string) => {
  try {
    const existingSubscriber = await edgeql
      .select(edgeql.NewsletterSubscription, (subscriber) => ({
        ...edgeql.NewsletterSubscription["*"],
        filter_single: edgeql.op(subscriber.email, "=", email),
      }))
      .run(client);

    if (existingSubscriber) return existingSubscriber;

    const newsletterSubscriber = await edgeql.insert(edgeql.NewsletterSubscription, { email }).unlessConflict().run(client);

    await triggerEmail({
      to: email,
      variables: {},
      subject: "Welcome to the newsletter!",
      template: "thank you for subscribing to naman's newsletter!",
    });

    return newsletterSubscriber;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export { getOrCreateUser, subscribeToNewsletter };

interface GetOrCreateUserProps {
  email: string;
  name: string;
  image: string;
}
