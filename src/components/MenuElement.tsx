import { MenuItem } from "../types"

type MenuElementProps = {
    item :MenuItem
    addItem: (item:MenuItem) => void
}
export default function MenuElement({item, addItem}:MenuElementProps) {
  
    return (
  
        <button className="font black flex justify-between w-full bg-teal-200 p-5 hover:bg-teal-400 rounded-xl " onClick={()=>addItem(item)}>
            <p className="text-1xl font-bold">{item.name} </p>
            <p className="font-black">{item.price}€</p>
        </button>
        

  )
}
