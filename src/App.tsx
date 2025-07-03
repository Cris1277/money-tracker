import MenuElement from "./components/MenuElement";
import OrderContent from "./components/OrderContent";
import useOrder from "./hooks/useOrder";
import { menuItems } from "./data/db";
function App() {
  const { addItem, order, subtotalAmount, removeItem } = useOrder();
  return (
    <>
      {" "}
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <div>
          <header className="bg-red-400 text-center p-10 text-white">
            <h1 className="font-black text-4xl sm:text-6xl">MoneyTracker</h1>
            <h2 className="text-xl sm:text-4xl font-black mt-2">
              con TypeScript & React
            </h2>
          </header>

          <main className="grid sm:grid-cols-2 ">
            <div className="border-2 m-5 space-y-3 p-5">
              <h2 className="text-4xl font-black text-center">Menú</h2>
              {menuItems.map((item) => (
                <MenuElement key={item.id} item={item} addItem={addItem} />
              ))}
            </div>

            <div className="border-4 border-dashed m-5 space-y-3 p-5">
              <h2 className="text-4xl font-black text-center">Consumo</h2>
              <OrderContent
                order={order}
                subtotalAmount={subtotalAmount}
                removeItem={removeItem}
              />
            </div>
          </main>
        </div>
        <footer>
          <p className="text-center bg-red-400 p-5 font-black text-white">
            Todos los derechos reservados &copy;
            <a href="https://www.bitnazari.com">
              {" "}
              <span className="text-green-300 font-black hover:text-green-500">
                Bitnazari
              </span>
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;



