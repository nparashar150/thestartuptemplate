import { createClient } from "edgedb";
import edgeql from "./dbschema/edgeql-js";

const client = createClient();

export { client, edgeql };
