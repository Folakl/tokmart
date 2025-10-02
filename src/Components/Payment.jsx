import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const Payment = () => {
  const { total, setDetails } = useContext(CartContext);

  const [payment, setPayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [cvv, setCvv] = useState("");

  // Save details into context (demo only, not secure for production)
  const handleSaveDetails = () => {
    setDetails({
      payment,
      cardHolder,
      cardNumber,
      expiryMonth,
      cvv,
    });
  };

  // Select payment method
  const handleSelect = (method) => {
    setPayment(method);
  };

  const handlePay = () => {
    if (!payment) {
      alert("Please select a payment method.");
      return;
    }
    alert(`Processing payment of $${total} via ${payment}`);
    
  };

  return (
    <div className="bg-blue-600 h-screen flex justify-center lg:items-center md:items-start pt-10 px-4">
      <div className="bg-white rounded-2xl w-[500px] h-fit p-3 flex">
        {/* Left summary */}
        <div className="bg-purple-900 rounded-md w-1/3 p-3 text-white font-bold">
          <div className="flex gap-1">
            <h3 className="py-1">
              <ion-icon name="card-outline"></ion-icon>
            </h3>
            <h3>TokMart</h3>
          </div>
          <h3 className="mt-3 text-lg">${total}</h3>
          <div className="mt-[120px] text-[10px]">
            <h3>
              Secure payments are powered by TokMart. Your information is kept
              private and safe.
            </h3>
          </div>
        </div>

        {/* Right form */}
        <div className="w-2/3 px-5">
          <h3 className="py-2">Select Payment Method</h3>
          <div className="flex flex-wrap gap-3">
            <div
              className="text-purple-900 w-[50px] h-[50px] flex items-center justify-center bg-[#daaabd] rounded-2xl cursor-pointer"
              onClick={() => handleSelect("card")}
            >
              <ion-icon name="card-outline" size="large"></ion-icon>
            </div>
            <div
              className="text-purple-900 w-[50px] h-[50px] flex items-center justify-center bg-[#daaabd] rounded-2xl cursor-pointer"
              onClick={() => handleSelect("paypal")}
            >
              <ion-icon name="logo-paypal" size="large"></ion-icon>
            </div>
          </div>

          {/* Card fields */}
          {payment === "card" && (
            <>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="outline-none rounded-md bg-[#daaabd] text-black font-bold w-full h-[40px] my-2 p-2"
                placeholder="Card number"
              />
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value)}
                className="outline-none rounded-md bg-[#daaabd] text-black font-bold w-full h-[40px] my-2 p-2"
                placeholder="Card holder"
              />
              <div className="flex gap-2">
                <input
                  type="month"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  className="p-2 rounded-md bg-[#daaabd] w-1/2"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="p-2 rounded-md bg-[#daaabd] w-1/2"
                  placeholder="CVV"
                />
              </div>
              <div className="flex gap-2 mt-4">
                <input type="checkbox" onChange={handleSaveDetails} />
                <h3 className="text-[12px]">Save card details for future use</h3>
              </div>
            </>
          )}

          {/* Pay button */}
          <div
            className="w-[180px] h-[30px] bg-purple-900 rounded-full flex items-center justify-between mt-5 pl-5 cursor-pointer text-white font-bold"
            onClick={handlePay}
          >
            <h3>Pay now</h3>
            <span className="rounded-full bg-purple-400 w-7 h-7 flex items-center justify-center">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
