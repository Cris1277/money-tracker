
# 🍽️ Carta Interactiva de Restaurante — React + TypeScript

Aplicación web desarrollada con **React** y **TypeScript**, que simula una carta digital para un restaurante. Permite a los usuarios seleccionar productos, visualizar el contenido de su orden y ver el total a pagar, todo en una interfaz rápida, intuitiva y responsive.

---

## 🔗 Demo en vivo

👉 [Ver sitio desplegado en Netlify](https://sunny-gecko-27be8b.netlify.app)

---

## ⚛️ Tecnologías y herramientas utilizadas

- React 18 con TypeScript
- Vite 
- HTML5 + Tailwind CSS
- Hooks de React (`useState`, `useMemo`,etc)
- Arquitectura modular con componentes reutilizables
- Custom hook: `useOrder` para gestión del estado del pedido
- Despliegue con **Netlify**

---

## 📁 Estructura del proyecto

```
📦 root/
├── public/
├── src/
│   ├── components/
│   │   ├── MenuElement.tsx       # Componente para cada ítem del menú
│   │   └── OrderContent.tsx      # Componente que muestra el contenido del pedido
│   ├── data/
│   │   └── db.ts                 # Base de datos local simulada con productos
│   ├── hooks/
│   │   └── useOrder.ts           # Custom hook para manejar pedidos
│   ├── types/
│   │   └── index.ts              # Tipos globales (TypeScript)
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## ✨ Funcionalidades

- 📋 Visualización de menú en pantalla
- ➕ Añadir ítems a un pedido
- ➖ Eliminar ítems del pedido
- 💰 Cálculo automático del total con `useMemo`
- 📱 Diseño completamente responsive

---

## 🚀 Mejoras futuras

- 💸 Añadir propinas o sección para seleccionar porcentaje
- 💬 Incluir campo de comentarios o notas para el pedido
- 🧾 Enviar el pedido por correo o integrarlo con una API real
- 🌐 Soporte multi-idioma

---

## 🧠 Hooks usados

- `useState`: manejo del estado del pedido
- `useMemo`: cálculo eficiente del total a pagar
- `useEffect` (en futuras mejoras)
- `useContext` (posible en versiones ampliadas)
- Custom Hook: `useOrder` centraliza la lógica de pedido

---

## 📦 Instalación local

1. Clona el repositorio:
```bash
git clone https://github.com/tu_usuario/carta-interactiva.git
cd carta-interactiva
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el entorno de desarrollo:
```bash
npm run dev
```

---

## 👨‍💻 Autor

**Cristian Serrano**  
🔗 [GitHub - Cris1277](https://github.com/Cris1277)

---

## 📝 Licencia

MIT License © 2025 Cristian Serrano
