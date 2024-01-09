import React from "react";
import orderData from "../data/orderData";

const Transactions = () => {
  return (
    <div className="transactions">
      <text>Transactions | This Month</text>
      <div>Search , Sort , Download</div>
      <body>
        <div className="row heading">
          <text>Order ID</text>
          <text>Order Date</text>
          <text>Order Amount</text>
          <text>Transaction Fees</text>
        </div>
        {orderData.map((order) => {
          return (
            <div className="row">
              <text>{order.order_id}</text>
              <text>{order.order_date}</text>
              <text>{order.order_amount}</text>
              <text>{order.transaction_fees}</text>
            </div>
          );
        })}
      </body>
    </div>
  );
};

export default Transactions;
