import React from "react";
import "./Cartdata.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cartdata = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClear,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cartitems">
      <div>
        <h2 className="cartitems--Header">cart items</h2>
      </div>
      <div>
        {cartItems.length >= 1 && (
          <Button onClick={handleCartClear} className="cartitems--ClearCart">
            Clear the cart
          </Button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div>
          <h3 className="cartitems--Empty">
            your cart is empty add some products to cart by going to home page
          </h3>
        </div>
      )}
      <div>
        {cartItems.map((item) => (
          <div className="carditems--List">
            <Card key={item.id}>
              <div>
                <Card.Img
                  src={item.image}
                  alt={item.name}
                  className="cartitems--Image"
                />
              </div>
              <div>
                <Card.Title className="cartitem--Title">
                  {item.title}
                </Card.Title>
              </div>
              <div className="cartitem--Functions">
                <Button
                  variant="success"
                  className="cartitem--Add"
                  onClick={() => handleAddProduct(item)}
                >
                  +
                </Button>
                <Button
                  variant="warning"
                  className="cartitem--Remove"
                  onClick={() => handleRemoveProduct(item)}
                >
                  -
                </Button>
              </div>
              <div className="cartitem--Price">
                {item.quantity} * ${item.price}
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Card className="cartitems--Totalprice">
        <h2 className="cartitems--Totalprice--Heading">
          Total Amount :
          <span className="cartitems--Totalprice--Value">
            ${totalPrice}
            <span className="cartitems--Totalprice--Value--Text">
              to be paid
            </span>
          </span>
        </h2>
      </Card>
    </div>
  );
};

export default Cartdata;
