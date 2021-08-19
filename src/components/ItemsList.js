import React, {useState} from 'react';
import Item from "./Item";
import SelectionModal from "./modals/SelectionModal";
import SuccessModal from "./modals/SuccessModal";
import items from "../items";

export default function ItemsList() {
    const [selection, setSelection] = useState(false);
    const [success, setSuccess] = useState(false)
    const undoSelection = () => setSelection(!selection)
    return (
        <div className="item-list">
            {items.map(item => 
                <Item 
                    item={item} 
                    setSelection={undoSelection} 
                />
            )}
            {selection &&
                <SelectionModal 
                    items={items} 
                    setSelection={undoSelection}
                    success={() => setSuccess(true)}
                />
            }
            {success && <SuccessModal done={() => setSuccess(false)} />}
        </div>
    )
}
