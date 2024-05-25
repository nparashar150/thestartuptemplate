CREATE MIGRATION m1orj4bha63u4bggabqdjdiihzjcw7woxjmdymbgnymkqysquybgfa
    ONTO m17ew247qiovifjxifz23i5fbbl6wbylpvjborbwlixgeoiwznmmha
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
