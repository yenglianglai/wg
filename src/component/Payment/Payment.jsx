import React from "react";
import "./Payment.scss";

const Payment = ({ lang }) => {
  return (
    <div className="payment">
      <img
        src={
          lang === "zh-TW"
            ? "/img/payment.jpg"
            : lang === "zh-CN"
            ? "/img/payment_sim.png"
            : "/img/payment_eng.png"
        }
        alt=""
      />
    </div>
  );
};

export default Payment;
