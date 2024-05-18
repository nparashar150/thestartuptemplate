using extension auth;

module default {
    type Person {
        overloaded required id: uuid {default := uuid_generate_v4();};

        required email: str;
        required password: str;
        required last_name: str;
        required first_name: str;
        
        required created_at: datetime {default := datetime_current()};
        required updated_at: datetime {default := datetime_current()};
        required last_login: datetime {default := datetime_current()};
        
        required is_archived: bool {default := false};
        required is_verified: bool {default := false};
        required number_of_logins: int32 {default := 1};
        
        required marketing_consent: bool {default := false};

        avatar: str;
        archived_at: datetime;
    }
}
