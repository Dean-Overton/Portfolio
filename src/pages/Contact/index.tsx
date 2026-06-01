import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const Contact = () => {
  useDocumentMeta({
    title: "Contact | Dean Overton",
    description:
      "Get in touch with Dean Overton. Reach out about software engineering opportunities, freelance work, or collaboration.",
    canonical: "https://deanoverton.com/contact",
  });

  return (
    <div className="pt-16">
      <Header title="Contact" subtitle="Get in touch with me!" />
      <div className="min-h-screen w-full p-8">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
