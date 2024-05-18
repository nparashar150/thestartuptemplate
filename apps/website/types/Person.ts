interface Person {
  email: string;
  is_verified: boolean;
  created_at: string;
  avatar: string;
  first_name: string;
  last_name: string;
  archived_at: null | string;
  is_archived: boolean;
  marketing_consent: boolean;
  number_of_logins: number;
  password: string;
  last_login: string;
  updated_at: string;
  provider: string;
  id: string;
}

export type { Person };
