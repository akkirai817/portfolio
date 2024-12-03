import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactus.css";
import "../styles/contact.css";
import { pageIds } from "../utils/contants";

export const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState(""); // State to store error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success message popup

  const validateForm = () => {
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;

    if (name.length > 40) {
      setError("Name cannot exceed 40 characters.");
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid Gmail address.");
      return false;
    }

    setError("");
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    emailjs
      .sendForm(
        "service_8vs8552",
        "template_e6gw0wq",
        form.current,
        "oLaXcSaAcxlSJOPew"
      )
      .then(
        (result) => {
          setSuccessMessage("Mail sent successfully ✅");
          setTimeout(() => setSuccessMessage(""), 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="data" id={pageIds.contactUs}>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" autoComplete="off" />
        <label>Email</label>
        <input type="email" name="user_email" autoComplete="off" />
        <label>Message</label>
        <textarea name="message" autoComplete="off" rows="4" cols="2" />
        {error && <p className="error">{error}</p>}{" "}
        <input type="submit" value="Send" autoComplete="off" />
      </form>

      {/* Success Message Popup */}
      {successMessage && <div className="success-popup">{successMessage}</div>}
    </div>
  );
};
