import React, {useState} from 'react';
import Item from "./Item";
import SelectionModal from "./modals/SelectionModal";
import items from "../items";

export default function ItemsList() {
    const [selection, setSelection] = useState(false)
    return (
        <div className="item-list">
            {items.map(item => {
                return <Item 
                        item={item} 
                        setSelection={() => setSelection(!selection)} />
            })}
            <SelectionModal items={items} selection={selection}/>
        </div>
    )
}
