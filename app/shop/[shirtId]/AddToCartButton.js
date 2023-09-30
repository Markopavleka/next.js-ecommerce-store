'use client';
import { useState } from 'react';
import { createOrUpdateItem } from './actions.js';
import style from './AddToCartButton.module.scss';

export default function AddToCartButton(props) {
  const [quantity, setQuantity] = useState('');
  return (
    <div>
      <p>Quantity:</p>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.currentTarget.value);
        }}
      />
      <br />
      <button
        className={style['button-11']}
        onClick={async () => {
          await createOrUpdateItem(props.shirtId, quantity);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}