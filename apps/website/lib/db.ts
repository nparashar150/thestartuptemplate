import { client, edgeql } from "@repo/db";

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
      marketing_consent: false,
      avatar: user.image || "",
      first_name: user.name.split(" ")[0] || "",
      last_name: user.name.split(" ").slice(1).join(" ") || "",
    };

    await edgeql
      .insert(edgeql.Person, newUserBody)
      .unlessConflict()
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
  const newsletterSubscriber = await edgeql.insert(edgeql.NewsletterSubscription, { email }).unlessConflict().run(client);
  return newsletterSubscriber;
};

export { getOrCreateUser, subscribeToNewsletter };

interface GetOrCreateUserProps {
  email: string;
  name: string;
  image: string;
}
