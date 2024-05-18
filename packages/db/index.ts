import { createClient } from "edgedb";
import e from "./dbschema/edgeql-js";

const client = createClient();

const db = {
  client,
  e,
};

export default db;
