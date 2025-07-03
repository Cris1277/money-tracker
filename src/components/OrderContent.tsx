import { OrderItem, MenuItem } from "../types";

// Definimos las props que recibirá el componente
type OrderContentProps = {
  order: OrderItem[];                     // Lista de elementos en la orden
  subtotalAmount: number;                // Total acumulado de la orden
  removeItem: (id: MenuItem["id"]) => void; // Función para eliminar un ítem por su ID
};

// Componente funcional que muestra el contenido de la orden
export default function OrderContent({ order, subtotalAmount, removeItem }: OrderContentProps) {
  return (
    <>
      {/* Si la orden está vacía, se muestra un mensaje */}
      {order.length === 0 ? (
        <p className="text-2xl font-semibold text-center">La orden está vacía</p>
      ) : (
        <div className="">
          {/* Iteramos sobre los elementos de la orden y los mostramos */}
          {order.map((orderItem) => (
            <div key={orderItem.id} className="p-3 border-2 border-dashed m-6 bg-white">
              <div className="flex justify-between">
                {/* Nombre del ítem */}
                <p className="font-bold">{orderItem.name}</p>

                {/* Cantidad seleccionada */}
                <p>
                  Cantidad: <span className="font-black">{orderItem.quantity}</span>
                </p>

                {/* Botón para eliminar el ítem de la orden */}
                <button
                  className="bg-red-600 h-8 w-8 rounded-lg font-black text-white hover:cursor-pointer"
                  onClick={() => removeItem(orderItem.id)}
                >
                  X
                </button>
              </div>

              {/* Coste total por ítem (cantidad * precio) */}
              <div>
                <p>
                  Coste: <span className="font-black">{orderItem.quantity * orderItem.price}€</span>
                </p>
              </div>
            </div>
          ))}

          {/* Sección inferior con el total acumulado */}
          <div className="p-3 flex justify-center">
            <p className="rounded-xl bg-white w-60 text-2xl text-center p-2">
              Total a pagar: <span className="font-black">{subtotalAmount}€</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
