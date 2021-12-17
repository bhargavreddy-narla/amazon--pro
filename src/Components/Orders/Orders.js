import React from "react";
import "./Orders.scss";
import Card from "react-bootstrap/Card";

const Orders = () => {
  return (
    <div>
      <Card className="orders--Card">
        <Card.Title>
          <h2 className="orders--Heading">There is no orders</h2>
        </Card.Title>
      </Card>
    </div>
  );
};

export default Orders;
