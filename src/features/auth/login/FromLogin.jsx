"use client";
"use client";

export default function LoginForm() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] transition-colors duration-300">
      <section className="flex flex-col items-center space-y-6 w-full max-w-sm">
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-400 dark:from-blue-600 dark:to-blue-400 shadow-soft dark:shadow-dark"></div>

        {/* Título */}
        <h1 className="text-2xl font-semibold text-[var(--text)]">
          InventarioPlus
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Bienvenido de nuevo
        </p>

        {/* Tarjeta de login */}
        <div className="w-full bg-[var(--card)] shadow-soft dark:shadow-dark rounded-2xl p-6 space-y-4 transition-colors duration-300">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors"
          />

          <a
            href="#"
            className="block text-sm text-primary dark:text-blue-400 hover:underline text-right"
          >
            ¿Olvidaste tu contraseña?
          </a>

          <button
            className="w-full bg-[var(--primary)] text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Iniciar sesión
          </button>
        </div>
      </section>
    </main>
  );
}
