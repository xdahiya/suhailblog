import React, { useState } from "react";
import { Container } from "./styles"; // Assuming the styles are in styles.ts
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export function Contact() {
  const email = "tech.suhail22@gmail.com";
  const phone = "8707219308";
  
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string>("");
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }

    try {
      console.log("Form submitted:", formData);
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowPopUp(true);
      setTimeout(() => setShowPopUp(false), 3000); // Hide the pop-up after 3 seconds
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project?</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div className="contact-item">
          <a href={`mailto:${email}`} className="contact-link">
            <div className="contact-content">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <span className="contact-text">{email}</span>
            </div>
          </a>
        </div>
        <div className="contact-item">
          <a href={`tel:${phone}`} className="contact-link">
            <div className="contact-content">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <span className="contact-text">{phone}</span>
            </div>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}

      {showPopUp && (
        <div className="pop-up-message">
          <p>Message Sent Successfully!</p>
        </div>
      )}
    </Container>
  );
}
