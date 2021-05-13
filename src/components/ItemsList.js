import React from 'react';
import Item from "./Item";
import items from "../items";

export default function ItemsList() {
    return (
        <div>
            {items.map(item => {
                return <Item item={item} />
            })}
        </div>
    )
}
