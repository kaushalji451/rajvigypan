import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PaymentButton = ({ amount, onPaymentSuccess,name,email,contact }) => {
  const handlePayment = async () => {
    const res = await loadRazorpayScript();
    if (!res) return alert("Razorpay SDK failed to load");

    const orderRes = await fetch("/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const orderData = await orderRes.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Event Booking",
      description: "Ticket Purchase",
      order_id: orderData.id,
      handler: function (response) {
          toast.success("Payment Successful!");
        onPaymentSuccess(true); // mark payment success
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
      theme: { color: "#3399cc" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

    return (
        <>
        <ToastContainer transition={Bounce} />
        <button
        onClick={handlePayment}
        className="w-full bg-green-500 text-white py-2 rounded-md mt-3"
        >
        Pay ₹{amount}
        </button>
        </>
  );
};

export default PaymentButton;
