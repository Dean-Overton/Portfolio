import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";

const Contact = () => {
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
