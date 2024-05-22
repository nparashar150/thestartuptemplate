CREATE MIGRATION m1xomqo4ogdl7umze2yhbxws7zihsovy7q23uzebonq45jtaerpt7a
    ONTO m1drn7j4dvyh6625f6zvardgybw6zxdishinqn2isyb5jbfvuclinq
{
  CREATE TYPE default::NewsletterSubscription {
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE CONSTRAINT std::exclusive ON (.email);
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY is_archived: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY is_verified: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY updated_at: std::datetime {
          SET default := (std::datetime_current());
      };
  };
  ALTER TYPE default::Person {
      DROP PROPERTY marketing_consent;
  };
};
