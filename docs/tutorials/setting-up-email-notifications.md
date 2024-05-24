---
description: >-
  To enable email notifications with Mailgun in your Startup Template project,
  follow these steps to obtain the necessary environment variables.
---

# Setting Up Email Notifications

## **Create a Mailgun Account**

1. **Sign Up for Mailgun**:
   * Go to [Mailgun](https://www.mailgun.com/) and sign up for an account.
2.  **Set Up Your Domain**:

    * After signing up, set up your [domain](https://app.mailgun.com/mg/sending/domains) within the Mailgun dashboard.

    <div align="left">

    <figure><img src="../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Mailgun domains</p></figcaption></figure>

    </div>

## **Obtain Mailgun API Keys**

1. **Retrieve Your Domain Information**:
   * Once your domain is set up, navigate to your domain settings in the Mailgun dashboard.
2.  **Get Your Domain Details**:

    * Note down your Mailgun domain, sender email address.
    * Generate Mailgun API key from [api\_security](https://app.mailgun.com/settings/api\_security) page.

    <div align="left">

    <figure><img src="../.gitbook/assets/image (3).png" alt=""><figcaption><p>Mailgun api keys</p></figcaption></figure>

    </div>

## **Add to .env File**

1. **Open Your .env File**:
   * Open your project's `.env` file.
2.  **Add Mailgun Environment Variables**:

    * Add the following variables to your `.env` file:

    ```env
    MAILGUN_DOMAIN=your_mailgun_domain
    MAILGUN_SENDER_EMAIL=your_sender_email
    MAILGUN_API_KEY=your_mailgun_api_key
    ```

## Example .env File

Here is an example of what your `.env` file should look like after adding Mailgun environment variables:

```env
MAILGUN_DOMAIN=example.com
MAILGUN_SENDER_EMAIL=sender@example.com
MAILGUN_API_KEY=key-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Final Steps

1. **Save Your Changes**:
   * Save the changes to your `.env` file.
2. **Restart Your Server**:
   * If your server is already running, restart it to apply the changes.
3. **Test Email Notifications**:
   * Verify that email notifications are working as expected in your project.

## Additional Resources

* [Mailgun Documentation](https://documentation.mailgun.com/docs/mailgun/user-manual/sending-messages/#send-via-http)

***

## Need Help?

If you have any feedback or run into any issues, don't hesitate to reach out at [nparashar150@gmail.com](mailto:nparashar150@gmail.com).&#x20;

Happy coding!
