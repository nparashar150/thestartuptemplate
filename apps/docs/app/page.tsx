import { Button } from "@repo/ui/components/ui/button";
import db from "@repo/db";

export default async function Page() {
  const persons = await db.e.select(db.e.Person).run(db.client);
  return (
    <main>
      <Button>Click me</Button>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.id}</li>
        ))}
      </ul>
    </main>
  );
}
