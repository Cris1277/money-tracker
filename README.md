# 🧾 Carta Interactiva - Restaurante (React + TypeScript + Tailwind)

Aplicación web diseñada para funcionar como una carta digital de restaurante. Permite **seleccionar productos**, calcular el **total del pedido en tiempo real** y realizar una simulación de compra rápida y responsiva. Ideal como demostración de habilidades en desarrollo frontend moderno con React.

---

## 🔗 Demo en vivo

👉 [https://sunny-gecko-27be8b.netlify.app/](https://sunny-gecko-27be8b.netlify.app/)


---

## 🧩 Tecnologías utilizadas

- ⚛️ **React** con **TypeScript**
- 🎨 **Tailwind CSS** para estilos rápidos y responsivos
- ⚙️ **Vite** para empaquetado y desarrollo rápido
- ♻️ Lógica de estado y hooks personalizados (`useOrder`)
- 🧠 Composición de componentes modular

---

## ✨ Características principales

- ✅ Interfaz moderna y mobile-first
- ✅ Añadir productos desde el menú con botón interactivo
- ✅ Cálculo de total en tiempo real (formato carrito)
- ✅ Separación de responsabilidades por componente
- ✅ Código limpio, modular y reutilizable

---

## 📁 Estructura de carpetas

```
📦 carta-interactiva/
├── App.tsx                  # Componente principal
├── main.tsx                 # Punto de entrada
├── index.css                # Estilos globales con Tailwind + fondo decorativo
├── MenuElement.tsx          # Componente individual del menú
├── OrderContent.tsx         # Componente que muestra los elementos seleccionados
├── useOrder.ts              # Hook personalizado para gestionar el estado del pedido
├── db.ts                    # Datos simulados (array de platos)
├── vite-env.d.ts            # Configuración de Vite y TypeScript
```

---

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/carta-react.git
cd carta-react
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Abre en tu navegador:

```
http://localhost:5173
```

---

## 🧪 Datos de prueba

Los platos se almacenan localmente en el archivo `db.ts` para simular una respuesta de API.

Puedes modificar o extender el menú fácilmente editando ese archivo.

---

## 📱 Responsividad

Diseño optimizado con **Tailwind CSS**, que se adapta automáticamente a dispositivos móviles, tablets y pantallas grandes.

---

## 📌 ¿Qué demuestra este proyecto?

- Uso profesional de React con TypeScript
- Gestión de estado con hooks personalizados
- Estilo limpio con Tailwind CSS
- Separación de lógica y presentación
- Aplicación funcional tipo carrito sin backend

---

## 👨‍💻 Autor

**Cristian Serrano**  
🔗 [GitHub - Cris1277](https://github.com/Cris1277)

---

## 📝 Licencia

MIT © 2025 Cristian Serrano
