# 🧩 Página de Login - InventarioPlus

## 📁 Ubicación
`/app/login/page.jsx`

## 🧠 Descripción
Página de autenticación del sistema **InventarioPlus**, desarrollada con **Next.js (App Router)** y **TailwindCSS**.  
Permite a los usuarios ingresar su correo y contraseña para acceder al panel principal.

---

## ⚙️ Lógica actual
- Validación básica en el cliente.
- Redirección simulada a `/dashboard` si el usuario coincide con las credenciales mock:
  - **Usuario:** `admin@correo.com`
  - **Contraseña:** `1234`
- Modo oscuro/claro mediante el componente `ThemeToggle`.

---

## 🔌 Requerimientos para el Backend
El backend deberá implementar un endpoint para autenticar usuarios.

### 📡 Endpoint sugerido:
POST /api/auth/login
Body: { email, password }
Response: { success: true, token, user }


### 🧾 Flujo esperado:
1. El formulario envía los datos al backend.
2. El backend valida las credenciales.
3. Si son correctas, responde con un token JWT.
4. El frontend redirige al `/dashboard` y guarda el token (localStorage o cookies).

---

## 🧰 Tecnologías usadas
- Next.js 14 (App Router)
- React Hooks (`useState`, `useRouter`)
- TailwindCSS
- Componente global: `ThemeToggle`

---

## 📌 Pendientes
- Conectar con el endpoint real del backend.
- Implementar manejo de errores desde la API.
- Guardar token JWT y persistir sesión.
- Mostrar mensajes de error amigables (en lugar de `alert()`).

---

## 👨‍💻 Desarrollador Frontend
**Juan David Barba Jaime**  
Responsable del diseño, maquetación y lógica del cliente.
