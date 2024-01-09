import React, { useMemo, useState } from "react";
import orderData from "../data/orderData";
import Pagination from "./Pagination";

let PageSize = 5;
const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState("");
  const [isPresent, setIsPresent] = useState(false);
  const [searchData, setSearchData] = useState({});

  React.useEffect(() => {}, [isPresent]);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return orderData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const convertDateFormat = (inputDate) => {
    // Split the input date into month, day, and year
    const [month, day, year] = inputDate.split("/");

    // Create a new Date object using the components
    const dateObject = new Date(`${month}/${day}/${year}`);

    // Use toLocaleDateString to get the formatted date
    const formattedDate = dateObject.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formattedDate;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const foundOrder = orderData.find((order) => order.order_id === query);
    if (foundOrder) {
      const searchResultsData = orderData.filter(
        (order) => order.order_id === query
      );
      setIsPresent(true);
      setSearchData(searchResultsData);
    }
    setQuery("");
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="transactions">
      <text
        style={{
          display: "flex",
          justifySelf: "baseline",
          fontWeight: "700",
          fontSize: 24,
          marginBottom: 20,
        }}
      >
        Transactions | This Month
      </text>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
          height: 45,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            // paddingTop: 5,
            backgroundColor: "white",
            width: "30%",
          }}
          className="arrow-container"
        >
          <button type="submit" style={{ backgroundColor: "white" }}>
            <img
              src={"assets/search.png"}
              alt="logo"
              style={{ backgroundColor: "white" }}
            />
          </button>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            className="no-outline"
            placeholder="Search by order ID..."
          />
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            height: 45,
            gap: 20,
          }}
        >
          <div
            className="arrow-container"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              height: 45,
            }}
          >
            {/* <p>Sort</p> */}
            <div>Sort</div>
            <img
              src={"assets/sort.png"}
              alt="logo"
              style={{ backgroundColor: "white" }}
            />
          </div>
          <img
            src={"assets/download.png"}
            alt="logo"
            className="arrow-container"
            style={{ backgroundColor: "white", padding: 12 }}
          />
        </div>
      </div>
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
          {!isPresent &&
            currentTableData.map((order) => {
              return (
                <tr className="row">
                  <td className="order-id">{"#" + order.order_id}</td>
                  <td>{convertDateFormat(order.order_date)}</td>
                  <td>{"₹ " + order.order_amount}</td>
                  <td>{"₹ " + order.transaction_fees}</td>
                </tr>
              );
            })}
          {isPresent &&
            searchData.map((order) => {
              return (
                <tr className="row">
                  <td className="order-id">{"#" + order.order_id}</td>
                  <td>{convertDateFormat(order.order_date)}</td>
                  <td>{"₹ " + order.order_amount}</td>
                  <td>{"₹ " + order.transaction_fees}</td>
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
