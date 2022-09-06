import React, { useState } from "react";
import { useContext } from "react";
import classes from "./Cart.module.css";
import { Container, Row, Col, Button } from "reactstrap";
import { CartContext } from "../components/StoreContext/CartContext";
import { NavLink, useParams } from "react-router-dom";

const CartList = (props) => {
  const {cart, setCart, userId, setUserId, price} = useContext(CartContext);

  const [anchorP1, setAnchorP1] = useState(null);

  const handleClose = () => {
    setAnchorP1(null)
  }

  const params = useParams();
  console.log(params.id);

  return (
    <section className={classes.cartBody}>
      <Button classeName={classes.styleBtn} onClick={props.Close}>
        X
      </Button>
      <h2 className={classes.cartHeading}>CART</h2>
      <h4>Total Price:${price.toFixed(2)}</h4>
      <Row>
        <Col xs="4">
          <span className={classes.headText}>Item</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Price</span>
          <hr />
        </Col>
        <Col xs="4">
          <span className={classes.headText}>Quantity</span>
          <hr />
        </Col>
      </Row>
      {cart.map((items) => {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col xs="4">
                <Col xs="6">
                 <NavLink to={`/product/${items.id}`} onClick ={ handleClose }>
                 <img className={classes.cartImages} src={items.imageUrl} alt={items.title} />
                 </NavLink>
                </Col>
                <Col xs="6" className={classes.cartTitle}>
                  {items.title}
                </Col>
              </Col>
              <Col xs="4">₹{items.price}</Col>
              <Col xs="4">{items.quantity}</Col>
            </Row>
          </Container>
        );
      })}
    </section>
  );
};

export default CartList;
