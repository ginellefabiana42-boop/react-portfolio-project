// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
  // Setup react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This function only runs if all validation checks pass
  const onSubmit = (data) => {
    console.log("Form Data Transmitted:", data);
    setIsSubmitted(true);
    reset(); // Clears the form fields
    
    // Reset the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="contact-header">SYS.LOG // ESTABLISH_CONNECTION</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <p>
            Currently open for freelance commissions, collaborative projects, and internship opportunities in frontend development and interactive design.
          </p>
          <p>
            Ping my network below or transmit a direct message via the secure form.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub // Archive</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn // Network</a>
            <a href="mailto:your.email@example.com">Email // Direct_Comm</a>
          </div>
        </div>

        {/* The Form */}
        <form className="terminal-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">ID_Alias (Name)</label>
            <input 
              id="name"
              {...register("name", { required: "Error: Alias is required" })} 
              placeholder="Enter your name..."
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Return_Address (Email)</label>
            <input 
              id="email"
              {...register("email", { 
                required: "Error: Return address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Error: Invalid email format detected"
                }
              })} 
              placeholder="Enter your email..."
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Data_Payload (Message)</label>
            <textarea 
              id="message"
              {...register("message", { required: "Error: Payload cannot be empty" })} 
              placeholder="Type your message here..."
            />
            {errors.message && <span className="error-message">{errors.message.message}</span>}
          </div>

          <button type="submit" className="submit-btn">
            {isSubmitted ? "TRANSMISSION_SUCCESSFUL" : "INITIATE_TRANSFER"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;