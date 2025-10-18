"use client";

import ThemeToggle from "@/shared/ui/ThemeToggle";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/shared/api/authApi.js"; // ✅ Usa tu API real

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(email, password); // ✅ Envia al backend

    if (res.error) {
      alert(res.error); // Muestra error desde el servidor
    } else {
      router.push("/dashboard"); // ✅ Login correcto
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative px-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-wide">
          Inventario<span className="text-gray-800 dark:text-white">Plus</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-md mx-auto">
          Gestiona tus productos, controla tus existencias y mejora la eficiencia de tu negocio.
        </p>
      </header>

      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tucorreo@ejemplo.com"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
            Recuperar acceso
          </a>
        </p>
      </section>
    </main>
  );
}
