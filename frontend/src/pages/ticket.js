import React, { useState, useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentButton from "../components/PaymentButton";
import { FaCheckCircle } from "react-icons/fa";

const Ticket = () => {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    event: "",
    fullname: "",
    email: "",
    phoneno: "",
    ticketcnt: 1,
    tickettype: "",
    ticketprice: 0,
    totalPrice: 0,
    checkbox: false,
  });

  const events = [
    { id: 1, name: "Agra Garba Raas" },
    { id: 2, name: "Music Concert" },
    { id: 3, name: "Tech Conference" },
    { id: 4, name: "Comedy Show" },
  ];

  const ticketPrices = { vip: 1000, general: 500, student: 300 };

  // Load payment status from localStorage
  useEffect(() => {
    const storedPayment = localStorage.getItem("paymentSuccess");
    if (storedPayment === "true") {
      setPaymentSuccess(true);
    }
  }, []);

  // Update ticket total
  useEffect(() => {
    const pricePerTicket = ticketPrices[formData.tickettype] || 0;
    const total = formData.ticketcnt * pricePerTicket;

    setFormData((prev) => ({
      ...prev,
      ticketprice: pricePerTicket,
      totalPrice: total,
    }));
  }, [formData.ticketcnt, formData.tickettype]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Payment success handler
  const handlePaymentSuccess = (status) => {
    setPaymentSuccess(status);
    if (status) {
      localStorage.setItem("paymentSuccess", "true");
      toast.success("Payment Successful!");
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentSuccess) {
      return toast.error("Please complete payment first!");
    }

    try {
      setLoading(true);
      const res = await fetch("/api/addTicket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save ticket");

      toast.success("Booking confirmed! Check your email.");
      localStorage.removeItem("paymentSuccess"); // clear after booking
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setFormData({
        event: "",
        fullname: "",
        email: "",
        phoneno: "",
        ticketcnt: 1,
        tickettype: "",
        ticketprice: 0,
        totalPrice: 0,
        checkbox: false,
      });
      setPaymentSuccess(false);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <ToastContainer transition={Bounce} />
      <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6 min-md:mt-20">
        <div className="bg-white shadow-lg p-10 rounded-lg w-full max-w-2xl">
          <h1 className="text-2xl font-semibold text-center mb-6 text-black">
            Book Your Event Tickets
          </h1>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
            {/* Event Selection */}
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="w-full border-b p-2"
            >
              <option value="">Choose an event</option>
              {events.map((ev) => (
                <option key={ev.id} value={ev.name}>
                  {ev.name}
                </option>
              ))}
            </select>

            {/* Other Inputs */}
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border-b p-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border-b p-2"
            />
            <input
              type="tel"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              placeholder="Phone"
              required
              className="w-full border-b p-2"
            />
            <input
              type="number"
              name="ticketcnt"
              value={formData.ticketcnt}
              onChange={handleChange}
              min="1"
              className="w-full border-b p-2"
            />
            <select
              name="tickettype"
              value={formData.tickettype}
              onChange={handleChange}
              required
              className="w-full border-b p-2"
            >
              <option value="">Select Ticket Type</option>
              <option value="vip">VIP (₹1000)</option>
              <option value="general">General (₹500)</option>
              <option value="student">Student (₹300)</option>
            </select>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
                className="accent-black"
                required
              />
              <label>I agree to the terms & conditions</label>
            </div>

            <p className="text-center font-semibold">
              Total Price: ₹{formData.totalPrice}
            </p>

            {/* Payment Section */}
            {paymentSuccess ? (
              <div className="flex justify-center items-center gap-2 text-blue-600 font-semibold">
                <FaCheckCircle size={28} /> Payment Successful
              </div>
            ) : (
              <PaymentButton
                amount={formData.totalPrice}
                name={formData.fullname}
                email={formData.email}
                contact={formData.phoneno}
                onPaymentSuccess={handlePaymentSuccess}
              />
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!paymentSuccess || loading}
              className={`w-full py-3 rounded-md mt-2 ${
                paymentSuccess
                  ? "bg-black text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              {loading ? "Loading..." : "Book Ticket"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Ticket;
