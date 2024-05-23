CREATE MIGRATION m1opvzz4ydxo6xa4gwg53p6ornq7foqte36xur5xyd64f7ssoxg6qq
    ONTO m1jpdweeakaowd776vxwe3ptrleaxggyd4x3xsaspemgjlfvzqn6gq
{
  ALTER TYPE default::Post {
      CREATE REQUIRED PROPERTY preview: std::str {
          SET default := '';
      };
  };
};
