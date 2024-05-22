import { client, edgeql } from "@repo/db";
import * as config from "../config";

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
  const newsletterSubscriber = await edgeql.insert(edgeql.NewsletterSubscription, { email }).unlessConflict().run(client);
  return newsletterSubscriber;
};

const getTemplateConfig = async (email: string) => {
  const templateConfig = await edgeql
    .select(edgeql.TemplateConfig, (templateConfig) => ({
      ...edgeql.TemplateConfig["*"],
      filter_single: edgeql.op(templateConfig.creator.email, "=", email),
    }))
    .run(client);

  return templateConfig;
};

const saveTemplateConfig = async (email: string, config: string) => {
  await edgeql
    .update(edgeql.TemplateConfig, (templateConfig) => ({
      filter_single: edgeql.op(templateConfig.creator.email, "=", email),
      set: { content: config },
    }))
    .run(client);

  const newTemplateConfig = await edgeql
    .select(edgeql.TemplateConfig, (templateConfig) => ({
      ...edgeql.TemplateConfig["*"],
      filter_single: edgeql.op(templateConfig.creator.email, "=", email),
    }))
    .run(client);

  return newTemplateConfig;
};

export { getOrCreateUser, subscribeToNewsletter, getTemplateConfig, saveTemplateConfig };

interface GetOrCreateUserProps {
  email: string;
  name: string;
  image: string;
}
