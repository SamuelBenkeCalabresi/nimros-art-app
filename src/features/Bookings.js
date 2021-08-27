import React from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Bookings() {
  return (
    <div className="container-default">
      <Link to="/bookings" className="header-link-default">
        <h1 className="header-1-default">Prenotazioni</h1>
      </Link>{" "}
      <PayPalScriptProvider
        options={{
          "client-id":
            "ASIBbvvUc7zNUjBYMrmU07bf68RN1bWR2R-LoTigexQg7g8teOoywXL8k9ykbVwWuaozlv4cKu-1genp",
        }}
      >
        <PayPalButtons
          style={{}}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "1.00",
                  },
                },
              ],
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Bookings;
