import React from "react";
import "./Table.css";

const Table = ({ headings, children }) => {
  return (
    <table className="common_table">
      <thead>
        <tr>
          {headings.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody> {/* Wrapped children inside <tbody> */}
    </table>
  );
};

export default Table;
