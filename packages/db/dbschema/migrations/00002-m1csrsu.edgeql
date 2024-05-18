CREATE MIGRATION m1csrsu4ts5lyzgvairhq46p57uprak3f3a7e743jtworiee7qtt2a
    ONTO m1wvf2xtk6zbgpggi5y6bfkqvslbvwyqaajouzfl3rd7rxdopgscdq
{
  CREATE EXTENSION pgcrypto VERSION '1.3';
  CREATE EXTENSION auth VERSION '1.0';
  ALTER TYPE default::Person {
      ALTER PROPERTY id {
          DROP OWNED;
          RESET OPTIONALITY;
          RESET TYPE;
      };
  };
  CREATE SCALAR TYPE default::TransactionStatus EXTENDING enum<PENDING, COMPLETED, FAILED>;
  CREATE TYPE default::Transactions {
      CREATE REQUIRED PROPERTY amount: std::float64;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY status: default::TransactionStatus;
      CREATE REQUIRED PROPERTY updated_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY user_id: std::uuid;
  };
};
