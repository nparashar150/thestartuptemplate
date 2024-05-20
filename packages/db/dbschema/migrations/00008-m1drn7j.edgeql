CREATE MIGRATION m1drn7j4dvyh6625f6zvardgybw6zxdishinqn2isyb5jbfvuclinq
    ONTO m1qhm4gz5pjyswkmqor7r7i3u6i7gxwe3r63ymmaunpw2gnvxew32a
{
  ALTER TYPE default::Person {
      CREATE CONSTRAINT std::exclusive ON (.email);
  };
  ALTER TYPE default::Post {
      CREATE REQUIRED PROPERTY slug: std::str {
          SET default := (<std::str>std::uuid_generate_v4());
      };
      CREATE CONSTRAINT std::exclusive ON (.slug);
  };
};
