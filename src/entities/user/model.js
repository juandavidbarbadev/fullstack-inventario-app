import { createConnection } from "@/shared/api/db.js";

export async function findUserByEmail(email) {
  const conn = await createConnection();
  const [rows] = await conn.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  await conn.end();
  return rows[0];
}
