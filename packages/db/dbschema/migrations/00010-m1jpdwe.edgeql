CREATE MIGRATION m1jpdweeakaowd776vxwe3ptrleaxggyd4x3xsaspemgjlfvzqn6gq
    ONTO m1xomqo4ogdl7umze2yhbxws7zihsovy7q23uzebonq45jtaerpt7a
{
  CREATE TYPE default::TemplateConfig {
      CREATE REQUIRED LINK creator: default::Person;
      CREATE CONSTRAINT std::exclusive ON (.creator);
      CREATE REQUIRED PROPERTY content: std::json;
      CREATE REQUIRED PROPERTY created_at: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE REQUIRED PROPERTY is_archived: std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY updated_at: std::datetime {
          SET default := (std::datetime_current());
      };
  };
};
