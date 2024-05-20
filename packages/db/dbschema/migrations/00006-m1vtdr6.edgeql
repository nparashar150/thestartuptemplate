CREATE MIGRATION m1vtdr6wq25bj5o6fafclqyjhvgnk3alhx4n7rtsrqzt6m6q4tuemq
    ONTO m1bkar3dgdatnig2sr4m566r2oxqhxutigxk6vu7oogwj52pcuko4q
{
  CREATE TYPE default::BlogPost {
      CREATE REQUIRED LINK author: default::Person;
      CREATE REQUIRED PROPERTY content: std::str {
          SET default := '';
      };
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY is_archived: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY is_published: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY published_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY title: std::str;
      CREATE REQUIRED PROPERTY updated_at: std::datetime {
          SET default := (std::datetime_current());
      };
  };
};
