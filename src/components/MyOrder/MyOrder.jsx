import React from "react";
import "./MyOrder.css";
import Table from "../Common/Table";
import useData from "../../hooks/useData";
import Loader from "../Common/Loader";

const MyOrder = () => {
  const { data: orders, error, isLoading } = useData("/order");
  const getProductsString = (order) => {
    const productStringArray = order.products.map(
      (p) => `${p.product.title}(${p.quantity})`
    );
    return productStringArray.join(", ");
  };

  return (
    <section className="align_center myorder_page">
      {isLoading && <Loader />}
      {error && <em className="form_error">{error}</em>}
      {orders && (
        <Table headings={["Order", "Products", "Total", "Status"]}>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{getProductsString(order)}</td>
              <td>${order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </Table>
      )}
    </section>
  );
};

export default MyOrder;
