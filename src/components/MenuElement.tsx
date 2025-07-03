import { MenuItem } from "../types";

// Definimos el tipo de las props que recibe el componente
type MenuElementProps = {
  item: MenuItem;                      // Objeto con los datos del producto
  addItem: (item: MenuItem) => void;  // Función que añade el ítem al pedido
};

// Componente funcional que representa un ítem del menú
export default function MenuElement({ item, addItem }: MenuElementProps) {
  return (
    // Botón que al hacer clic agrega el ítem a la orden
    <button
      className="font-black flex justify-between w-full bg-teal-200 p-5 hover:bg-teal-400 rounded-xl"
      onClick={() => addItem(item)}
    >
      {/* Nombre del producto */}
      <p className="text-1xl font-bold">{item.name}</p>

      {/* Precio del producto */}
      <p className="font-black">{item.price}€</p>
    </button>
  );
}
