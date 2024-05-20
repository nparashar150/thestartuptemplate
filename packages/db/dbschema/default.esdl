module default {
    scalar type TransactionStatus extending enum<"PENDING", "COMPLETED", "FAILED">;
    scalar type Provider extending enum<"GITHUB", "GOOGLE", "EMAIL">;

    type Person {
        required email: str;
        required last_name: str;
        required first_name: str;
        required provider: Provider {default := "EMAIL"};
        
        required created_at: datetime {default := datetime_current()};
        required updated_at: datetime {default := datetime_current()};
        required last_login: datetime {default := datetime_current()};
        
        required is_archived: bool {default := false};
        required is_verified: bool {default := false};
        required number_of_logins: int32 {default := 1};
        
        required marketing_consent: bool {default := false};

        avatar: str;
        password: str;
        archived_at: datetime;
    }

    type Transactions {
        required amount: float64;
        required multi user_id: Person;
        required status: TransactionStatus;
        required created_at: datetime {default := datetime_current()};
        required updated_at: datetime {default := datetime_current()};
    }

    type Post {
        required title: str;
        required author: Person;
        required content: str {default := ""}
        required is_archived: bool {default := false};
        required is_published: bool {default := false};
        required created_at: datetime {default := datetime_current()};
        required updated_at: datetime {default := datetime_current()};
        required published_at: datetime {default := datetime_current()};
    }
}
