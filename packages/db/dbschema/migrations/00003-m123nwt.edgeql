CREATE MIGRATION m123nwterwkfw7yqr3b7orgs5civq5mt6n3g3hbbpbr2thhfazgbua
    ONTO m1csrsu4ts5lyzgvairhq46p57uprak3f3a7e743jtworiee7qtt2a
{
  ALTER TYPE default::Transactions {
      DROP PROPERTY user_id;
  };
  ALTER TYPE default::Transactions {
      CREATE REQUIRED MULTI LINK user_id: default::Person {
          SET REQUIRED USING (<default::Person>{});
      };
  };
};
