import { useState, useMemo } from "react";
import { MenuItem, OrderItem } from "../types";

/**
 * Hook personalizado para manejar la lógica de pedidos (orden de compra).
 * Permite agregar productos, eliminar, y calcular el subtotal.
 */
export default function useOrder() {
  // Estado que representa la lista de productos seleccionados (orden actual)
  const [order, setOrder] = useState<OrderItem[]>([]); // Tipado explícito

  /**
   * Cálculo del subtotal usando useMemo para evitar cálculos innecesarios
   * Se recalcula solo cuando cambia el array `order`
   */
  const subtotalAmount = useMemo(
    () =>
      order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  /**
   * Función para añadir un nuevo ítem al pedido o incrementar su cantidad si ya existe
   */
  const addItem = (item: MenuItem) => {
    const itemExist = order.find((itemOrder) => itemOrder.id === item.id);

    if (itemExist) {
      // Si el ítem ya existe, aumentamos la cantidad en 1
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      // Si no existe, lo añadimos con cantidad 1
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  /**
   * Función para eliminar un ítem del pedido usando su ID
   */
  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  // Log de depuración (opcional)
  console.log({ order });

  // Se devuelven las funciones y valores relevantes del hook
  return {
    addItem,
    order,
    subtotalAmount,
    removeItem,
  };
}

