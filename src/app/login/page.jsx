"use client"; // Indica que este componente se renderiza del lado del cliente (Next.js App Router)

import ThemeToggle from "@/shared/ui/ThemeToggle"; // Componente reutilizable para alternar entre modo claro y oscuro
import { useRouter } from "next/navigation"; // Hook de Next.js para redirección programática
import { useState } from "react"; // Hook de React para manejar estados locales

// 🧩 Componente principal: Página de inicio de sesión
export default function LoginPage() {

  // Estados para almacenar los valores del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hook de navegación
  const router = useRouter();

  // 🚀 Maneja el envío del formulario de login
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Validación básica de campos vacíos
    if (!email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    // 🔐 Validación temporal (mock)
    // Esta validación será reemplazada por la autenticación real desde el backend
    if (email === "admin@correo.com" && password === "1234") {
      router.push("/dashboard"); // Redirección al panel principal
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative px-4">
      
      {/* Botón modo claro/oscuro */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Encabezado con título y descripción */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2 tracking-wide">
          Inventario<span className="text-gray-800 dark:text-white">Plus</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-sm max-w-md mx-auto">
          Gestiona tus productos, controla tus existencias y mejora la eficiencia de tu negocio.
        </p>
      </header>

      {/* Tarjeta del formulario de inicio de sesión */}
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        
        {/* Formulario de autenticación */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {/* Campo: correo electrónico */}
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
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del correo
              placeholder="tucorreo@ejemplo.com"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Campo: contraseña */}
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
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botón de enviar */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors duration-200"
          >
            Ingresar
          </button>
        </form>

        {/* Enlace de recuperación de contraseña */}
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
