import React from "react";
import { connect } from "react-redux";

const Total = ({ price, addPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${price + addPrice}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.car.price,
    addPrice: state.additionalPrice,
  };
};

export default connect(mapStateToProps, {})(Total);
