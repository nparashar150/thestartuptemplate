---
description: >-
  EdgeDB Cloud is a fully managed, effortless cloud database service, engineered
  to let you deploy your database instantly and connect from anywhere with
  near-zero configuration.
---

# Connecting to EdgeDB Cloud

## **Create an EdgeDB Cloud Account**:

Go to [EdgeDB Cloud](https://www.edgedb.com/cloud) and create an account if you don't have one.

## **Set Up an EdgeDB Instance**:

Once logged in, set up a new EdgeDB instance.

## **Get Your EdgeDB Keys**:

After creating the instance, you will receive the following keys:

1. `EDGEDB_INSTANCE`
2. `EDGEDB_SECRET_KEY`

<div align="left" data-full-width="false">

<figure><img src="../.gitbook/assets/Screenshot 2024-05-24 at 6.37.04 PM (2).png" alt="" width="375"><figcaption><p>EdgeDB instance &#x26; keys</p></figcaption></figure>

</div>

## **Update Your .env File**:

Add the keys to your `.env` file in your project directory:

```env
EDGEDB_INSTANCE=your_instance_id
EDGEDB_SECRET_KEY=your_secret_key
```

This will connect your project to the EdgeDB Cloud instance and allow you to manage your database seamlessly.

***

## Need Help?

If you have any feedback or run into any issues, don't hesitate to reach out at [nparashar150@gmail.com](mailto:nparashar150@gmail.com).&#x20;

Happy coding!
