import React from "react";
import "./ProductsSideBar.css";
import LinkWithIcon from "../Navbar/LinkWithIcon";
import useData from "../../hooks/useData";

const ProductsSideBar = () => {
  const { data: categories, error } = useData("/category");

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links"></div>
      {error && <em className="form_error">{error}</em>}
      {categories &&
        categories.map((category) => (
          <LinkWithIcon
            key={category._id}
            id={category._id}
            title={category.name}
            link={`/products?category=${category.name}`}
            emoji={`http://localhost:5000/category/${category.image}`}
            sidebar={true}
          />
        ))}
    </aside>
  );
};

export default ProductsSideBar;
