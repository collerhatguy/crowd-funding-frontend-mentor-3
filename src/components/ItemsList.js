import React, {useState} from 'react';
import Item from "./Item";
import SelectionModal from "./modals/SelectionModal";
import SuccessModal from "./modals/SuccessModal";
import items from "../items";

export default function ItemsList() {
    const [selection, setSelection] = useState(false);
    const [success, setSuccess] = useState(false)
    return (
        <div className="item-list">
            {items.map(item => {
                return <Item 
                        item={item} 
                        setSelection={() => setSelection(!selection)} />
            })}
            <SelectionModal 
                items={items} 
                selection={selection}
                setSelection={() => setSelection(!selection)}
                success={() => setSuccess(true)}/>
            <SuccessModal success={success} done={() => setSuccess(false)} />
        </div>
    )
}
