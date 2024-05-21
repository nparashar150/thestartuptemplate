import axios from "axios";
import FormData from "form-data";

if (
  !process.env.MAILGUN_API_KEY ||
  !process.env.MAILGUN_DOMAIN ||
  !process.env.MAILGUN_SENDER_EMAIL
)
  throw new Error("Mailgun environment variables not set");

const triggerEmail = async ({
  to,
  subject,
  template,
  variables,
}: EmailProps) => {
  let data = new FormData();
  data.append("from", process.env.MAILGUN_SENDER_EMAIL);
  data.append("to", to);
  data.append("subject", subject);
  data.append("template", template);
  data.append("o:tracking-opens", "yes");
  data.append("h:X-Mailgun-Variables", JSON.stringify(variables));

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString("base64")}`,
      ...data.getHeaders(),
    },
    data: data,
  };

  const response = await axios(config);
  console.log(response.data);
};

export { triggerEmail };
export type { EmailProps };

/**
 * *
 * * Types and Interfaces
 * *
 */

interface EmailProps {
  to: string;
  subject: string;
  template: string;
  variables: Record<string, string | number>;
}
