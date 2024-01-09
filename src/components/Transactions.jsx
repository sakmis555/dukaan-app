import React, { useMemo, useState } from "react";
import orderData from "../data/orderData";
import Pagination from "./Pagination";

let PageSize = 7;
const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="transactions">
      <text>Transactions | This Month</text>
      <div>Search , Sort , Download</div>
      <table className="table">
        <thead>
          <tr className="row heading">
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Transaction Fees</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((order) => {
            return (
              <tr className="row">
                <td>{order.order_id}</td>
                <td>{order.order_date}</td>
                <td>{order.order_amount}</td>
                <td>{order.transaction_fees}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={orderData.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Transactions;
