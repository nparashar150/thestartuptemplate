CREATE MIGRATION m1qhm4gz5pjyswkmqor7r7i3u6i7gxwe3r63ymmaunpw2gnvxew32a
    ONTO m1vtdr6wq25bj5o6fafclqyjhvgnk3alhx4n7rtsrqzt6m6q4tuemq
{
  ALTER TYPE default::BlogPost RENAME TO default::Post;
};
