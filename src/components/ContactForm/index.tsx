import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <p className="success-message">
          Thank you for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div
            className="space-y-2 min-w-[300px]"
            style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
          >
            <Label>Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div
            className="space-y-2 min-w-[300px]"
            style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
          >
            <Label>Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div
            className="space-y-2 min-w-[300px]"
            style={{ "--ring": "234 89% 74%" } as React.CSSProperties}
          >
            <Label>Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" className="submit-button">
              Send Message
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
