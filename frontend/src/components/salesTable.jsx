import React, { useState } from "react";
import "../css/salesTable.css";

function SalesTable({ sales }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = sales.slice(indexOfFirstItem, indexOfLastItem);

  console.log(sales.length, currentData.length, currentPage)
  return (
    <div className="container">
      <h2>
        Sales Table
      </h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity Sold</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            currentData?.map((sale) => (
              <tr key={sale.product_id}>
                <td>{sale.product_id}</td>
                <td>{sale.product_name}</td>
                <td>{sale.jumlah_penjualan}</td>
                <td>{sale.harga}</td>
                <td>{sale.diskon}</td>
                <td>{sale.status}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="pagination">
        <button className="btn" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>

        <span> Page {currentPage} </span>

        <button
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= sales.length}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SalesTable;