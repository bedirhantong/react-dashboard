import React, { useState } from "react";
import "./ForgotPassword.css"; // Import the CSS file
import logo from "../Assets/akdeniz_logo.png";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual API call or backend logic
    try {
      const response = await fetch("/api/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reset email");
      }

      setSuccessMessage("A password reset link has been sent to your email.");
      setEmail("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" />
      </div>
      <h1>Şifrenizi mi Unuttunuz?</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-posta Adresi</label>
          <input
            type="email"
            id="email"
            placeholder="Kayıtlı e-posta adresinizi giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sıfırlama Bağlantısını Gönder</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
