import { useState, useMemo } from "react";
import { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  //Usamos generic OrderItem para que order no sea del tipo never
  const [order, setOrder] = useState<OrderItem[]>([]);
  const subtotalAmount = useMemo(()=> order.reduce ((total,item) => total +(item.quantity*item.price), 0),[order])
  const addItem = (item: MenuItem) => {
    const itemExist = order.find((itemOrder) => itemOrder.id === item.id);
    //Si el item que añadimos existe en la lista aumentamos cantidad+1 y sino añadimos ese nuevo item con quantity por defecto 1
    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 } //Si al recorrer la orden encontramos que ese elemento existe, aumentamos cantidad en 1
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      //Creamos una nueva constante para poder usarla en setOrder
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id :MenuItem["id"])=>{
    setOrder(order.filter(item =>item.id !== id))
  }
 



  console.log({ order });

  return {
    addItem,
    order,
    subtotalAmount,
    removeItem
    
  };
}
