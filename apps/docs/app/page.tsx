import { Button } from "@repo/ui/components/ui/button";
import db from "@repo/db";

export default async function Page() {
  const persons = await db.e
    .select(db.e.Person, (Person) => ({
      is_verified: Person.is_verified,
      created_at: Person.created_at,
      avatar: Person.avatar,
      email: Person.email,
      first_name: Person.first_name,
      last_name: Person.last_name,
      password: Person.password,
      archived_at: Person.archived_at,
      is_archived: Person.is_archived,
      marketing_consent: Person.marketing_consent,
      number_of_logins: Person.number_of_logins,
      last_login: Person.last_login,
      updated_a: Person.updated_at,
    }))
    .run(db.client);

  if (!persons) {
    return <div>No persons found</div>;
  }

  return (
    <main>
      <Button>Click me</Button>
      <pre>{JSON.stringify(persons, null, 2)}</pre>
    </main>
  );
}
