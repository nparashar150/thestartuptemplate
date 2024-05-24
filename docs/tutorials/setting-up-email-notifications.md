---
description: >-
  To enable email notifications with Mailgun in your Startup Template project,
  follow these steps to obtain the necessary environment variables.
---

# Setting Up Email Notifications

## **Step 1: Create a Mailgun Account**

1. **Sign Up for Mailgun**:
   * Go to [Mailgun](https://www.mailgun.com/) and sign up for an account.
2. **Set Up Your Domain**:
   * After signing up, set up your domain within the Mailgun dashboard.

## **Step 2: Obtain Mailgun API Keys**

1. **Retrieve Your Domain Information**:
   * Once your domain is set up, navigate to your domain settings in the Mailgun dashboard.
2. **Get Your Domain Details**:
   * Note down your Mailgun domain, sender email address, and API key.

## **Step 3: Add to .env File**

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

* [Mailgun Documentation](https://documentation.mailgun.com/docs/mailgun/api-reference/authentication/)

***

## Need Help?

If you encounter any issues or have questions, feel free to reach out to me at nparashar150@gmail.com. If you find this project helpful, consider supporting my work [here](https://example.com/donate).

Happy coding!
