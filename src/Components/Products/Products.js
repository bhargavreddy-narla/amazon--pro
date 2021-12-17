import React from "react";
import "./Products.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProductsList = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <Card className="products--Card">
          <div className="products--CardLists">
            {/* image */}
            <div>
              <Card.Img
                className="products--Image"
                src={productItem.image}
                alt={productItem.name}
              />
            </div>
            {/* title */}
            <div>
              <Card.Title className="products--Title">
                <h3>{productItem.title}</h3>
              </Card.Title>
            </div>
            {/* price */}
            <div>
              <h5 className="products--Price">
                <span className="products--Disprice">${productItem.price}</span>
                <span className="products--Orgprice">
                  <strike>${productItem.disprice}</strike>
                </span>
              </h5>
            </div>
            {/* addbutton */}
            <div>
              <Button
                variant="primary"
                className="products--AddButton"
                onClick={() => handleAddProduct(productItem)}
              >
                Add to cart
              </Button>
            </div>
            <div>
              <Button
                variant="primary"
                className="products--BuyButton"
                onClick={() => handleAddProduct(productItem)}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
