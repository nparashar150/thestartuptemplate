CREATE MIGRATION m1wvf2xtk6zbgpggi5y6bfkqvslbvwyqaajouzfl3rd7rxdopgscdq
    ONTO initial
{
  CREATE TYPE default::Person {
      ALTER PROPERTY id {
          SET default := (std::uuid_generate_v4());
          SET OWNED;
          SET REQUIRED;
          SET TYPE std::uuid;
      };
      CREATE PROPERTY archived_at: std::datetime;
      CREATE PROPERTY avatar: std::str;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY first_name: std::str;
      CREATE REQUIRED PROPERTY is_archived: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY is_verified: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY last_login: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY last_name: std::str;
      CREATE REQUIRED PROPERTY marketing_consent: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY number_of_logins: std::int32 {
          SET default := 1;
      };
      CREATE REQUIRED PROPERTY password: std::str;
      CREATE REQUIRED PROPERTY updated_at: std::datetime {
          SET default := (std::datetime_current());
      };
  };
};
