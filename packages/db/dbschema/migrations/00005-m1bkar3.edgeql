CREATE MIGRATION m1bkar3dgdatnig2sr4m566r2oxqhxutigxk6vu7oogwj52pcuko4q
    ONTO m1sd5cvbsqocmnykgzvxz3rivwdjqyrxkloclze552zqnr64id3qdq
{
  ALTER TYPE default::Person {
      ALTER PROPERTY password {
          RESET OPTIONALITY;
      };
  };
  CREATE SCALAR TYPE default::Provider EXTENDING enum<GITHUB, GOOGLE, EMAIL>;
  ALTER TYPE default::Person {
      CREATE REQUIRED PROPERTY provider: default::Provider {
          SET default := 'EMAIL';
      };
  };
};
