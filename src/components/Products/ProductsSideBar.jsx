import React from "react";
import "./ProductsSideBar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSideBar = () => {
  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links"></div>
      <LinkWithIcon
        title="electronics"
        link="products?category=electronics"
        emoji={rocket}
        sidebar={true}
      />
    </aside>
  );
};

export default ProductsSideBar;
