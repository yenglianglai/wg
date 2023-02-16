import React, { useEffect, useState, useCallback } from "react";
import "./Payment.scss";

const Payment = ({ lang, paymentRender }) => {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
    console.log(paymentRender);
  }, [paymentRender]);
  return (
    <div className="payment" key={Math.random()}>
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
