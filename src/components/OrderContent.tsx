import { OrderItem,MenuItem } from "../types";
type OrderContentProps = {
  order: OrderItem[];
  subtotalAmount: number
  removeItem: (id: MenuItem["id"]) => void
};
export default function OrderContent({ order,subtotalAmount,removeItem }: OrderContentProps) {
  return (
    <>
      {order.length === 0 ? (
        <p className="text-2xl font-semibold text-center">La orden está vacía</p>
      ) : (
        <div className="">
          {order.map((orderItem) => (
            <div key={orderItem.id}  className="p-3 border-2 border-dashed m-6 bg-white">
                <div className="flex justify-between ">
                  <p className="font-bold">{orderItem.name}</p>
              <p>
                Cantidad:{" "}
                <span className="font-black ">{orderItem.quantity}</span>
              </p>  
              <button className=" bg-red-600 h-8 w-8 rounded-lg font-black text-white hover: cursor-pointer"onClick={()=>removeItem(orderItem.id)}>X</button>
                </div>
              
              <div>
                <p>
                   Coste: <span className="font-black">{orderItem.quantity*orderItem.price}€</span> 
                </p>
              </div>
            </div>
          ))}
          <div className="p-3 flex justify-center">
            <p className= " rounded-xl bg-white w-60 text-2xl text-center p-2">Total a pagar:  <span className="font-black">{subtotalAmount}€</span></p>
            </div>
         
        </div>
      )}
    </>
  );
}
