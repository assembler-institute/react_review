import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Card from '../../components/Card/Card';

function CartPage() {
  const { cart } = useContext(CartContext);

  console.log({ cart });

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '2rem',
      }}
    >
      {cart.map((toy) => {
        const { id, image, name } = toy;
        return <Card key={id} id={id} image={image} name={name} />;
      })}
    </div>
  );
}

export default CartPage;
