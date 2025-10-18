import { NextResponse } from "next/server";
import { findUserByEmail } from "@/entities/user/model.js";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Buscar usuario en la BD
    const user = await findUserByEmail(email);

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
    }

    // ✅ Cambia aquí: usa "passwd" en vez de "password"
    const passwordMatch = password === user.passwd;

    if (!passwordMatch) {
      return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
    }

    // Autenticación exitosa
    return NextResponse.json({
      message: "Login exitoso",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
