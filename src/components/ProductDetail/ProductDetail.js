import React, { useContext } from "react";
import { Table } from "reactstrap";
import { CartContext } from "../StoreContext/CartContext";

const ProductDetail = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container mt-2">
      <div>
        <h2>Product Details Page</h2>
        <section className="container mt-3">
          <div>
            {cart.map((ele) => {
              return (
                <Table>
                  <div>
                    <img src={ele.imageUrl} alt="" />
                  </div>
                  <div>
                    <>
                      <tr>
                        <td>
                          <p>
                            <strong>Title</strong> : {ele.title}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹{ele.price}
                          </p>
                          <p>
                            <strong>Quantity</strong> : {ele.quantity}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹{ele.price}
                          </p>
                          <div
                            className="mt-5 d-flex jstify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span style={{ fontSize: 24 }}>-</span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span style={{ fontSize: 24 }}>+</span>
                          </div>
                        </td>
                      </tr>
                    </>
                  </div>
                </Table>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
