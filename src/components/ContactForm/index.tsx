import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";
declare global {
  interface Window {
    grecaptcha: {
      execute: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;
    };
  }
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mvgqkwwo");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      alert("reCAPTCHA not ready");
      return;
    }

    const token = await window.grecaptcha.execute(
      "6Lem1YwrAAAAADJ3lz69ngUcscuT-mtFKBkAFHRV",
      {
        action: "submit",
      }
    );

    const formWithCaptcha = {
      ...formData,
      "g-recaptcha-response": token,
    };

    handleSubmit(formWithCaptcha);
  };

  return (
    <div className="contact-form-container">
      {state.succeeded ? (
        <p className="success-message">
          Thank you for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmitForm}>
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
            <ValidationError prefix="Name" field="name" errors={state.errors} />
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
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
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
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              Send Message
            </Button>
          </div>
          {state.errors?.getFormErrors && (
            <div className="error-message">
              {state.errors.getFormErrors().map((error, index) => (
                <p key={index}>{error.message}</p>
              ))}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
