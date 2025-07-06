# 🍽️ Interactive Restaurant Menu — React + TypeScript

Web application built with **React** and **TypeScript** that simulates a digital restaurant menu. Users can select products, view their order contents, and see the total cost — all within a fast, intuitive, and responsive interface.

---

## 🔗 Live Demo

👉 [View site on Netlify](https://sunny-gecko-27be8b.netlify.app)

---

## ⚛️ Technologies and Tools Used

- React 18 with TypeScript
- Vite
- HTML5 + Tailwind CSS
- React Hooks (`useState`, `useMemo`, etc.)
- Modular architecture with reusable components
- Custom hook: `useOrder` for managing order state
- Deployed with **Netlify**

---

## 📁 Project Structure

```
📦 root/
├── public/
├── src/
│   ├── components/
│   │   ├── MenuElement.tsx       # Component for each menu item
│   │   └── OrderContent.tsx      # Component showing order contents
│   ├── data/
│   │   └── db.ts                 # Local mock database with products
│   ├── hooks/
│   │   └── useOrder.ts           # Custom hook for order management
│   ├── types/
│   │   └── index.ts              # Global TypeScript types
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

## ✨ Features

- 📋 Menu display
- ➕ Add items to order
- ➖ Remove items from order
- 💰 Automatic total calculation using `useMemo`
- 📱 Fully responsive design

---

## 🚀 Future Improvements

- 💸 Add tip options or percentage selector
- 💬 Include comment/note field for orders
- 🧾 Send order via email or integrate with real API
- 🌐 Multi-language support

---

## 🧠 Hooks Used

- `useState`: manage order state
- `useMemo`: efficient total price calculation
- `useEffect` (planned for future features)
- `useContext` (possible in extended versions)
- Custom Hook: `useOrder` centralizes order logic

---

## 📦 Local Installation

1. Clone the repository:
```bash
git clone https://github.com/your_user/carta-interactiva.git
cd carta-interactiva
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

---

## 👨‍💻 Author

**Cristian Serrano**  
🔗 [GitHub - Cris1277](https://github.com/Cris1277)

---

## 📝 License

MIT License © 2025 Cristian Serrano
