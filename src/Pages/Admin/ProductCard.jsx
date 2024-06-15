import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity] = useState(1);

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
  };
  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          <strong>{formatCurrency (product.price)}</strong>
        </Card.Text>
        <Button variant="primary" onClick={handleAddToCartClick}>Add to Cart</Button>
        <Button variant="secondary" style={{ marginLeft: '10px' }}>View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
