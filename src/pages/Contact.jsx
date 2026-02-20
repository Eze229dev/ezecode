import emailjs from "@emailjs/browser";
import { Suspense, useRef, useState } from "react";
import { Container } from '../components/Container';
import { Button } from '../components/Button';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, text: "", type: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const showAlert = ({ show, text, type }) => {
    setAlert({ show, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message! I'll get back to you soon.",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "Error sending your message. Please try again.",
            type: "danger",
          });
        }
      );
  };

  return (
    <>
      {/* Alert Message */}
      {alert.show && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg z-50 animate-in fade-in slide-in-from-top-4 duration-300 ${
          alert.type === "success" 
            ? "bg-green-500 text-white" 
            : "bg-red-500 text-white"
        }`}>
          <p className="font-semibold">{alert.text}</p>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-n-1 mb-6">Get in Touch</h1>
            <p className="text-lg text-n-3 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out to me.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-n-1 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-n-8 border border-stroke-1 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-p-3 focus:ring-1 focus:ring-p-3 transition-all duration-300"
                  aria-label="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-n-1 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-n-8 border border-stroke-1 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-p-3 focus:ring-1 focus:ring-p-3 transition-all duration-300"
                  aria-label="Your email address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-n-1 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or idea..."
                  rows="6"
                  className="w-full px-4 py-3 bg-n-8 border border-stroke-1 rounded-lg text-n-1 placeholder-n-4 focus:outline-none focus:border-p-3 focus:ring-1 focus:ring-p-3 transition-all duration-300 resize-none"
                  aria-label="Your message"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 bg-p-3 text-n-9 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                  }`}
                  aria-label="Send message"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              <p className="text-sm text-n-4 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </Container>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-12 lg:py-20 bg-n-8 border-t border-stroke-1">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-n-1 mb-8 text-center">
              Other Ways to Reach Me
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:cleancodemastery@gmail.com"
                className="p-6 border border-stroke-1 rounded-lg hover:border-p-3 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-n-1 mb-2 group-hover:text-p-3 transition-colors">
                  Email
                </h3>
                <p className="text-n-3">cleancodemastery@gmail.com</p>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-6 border border-stroke-1 rounded-lg hover:border-p-3 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-n-1 mb-2 group-hover:text-p-3 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-n-3">linkedin.com/in/Ezéckiel Tadagbé</p>
              </a>
              <a
                href="http://wa.me/22959042418"
                target="_blank"
                rel="noreferrer"
                className="p-6 border border-stroke-1 rounded-lg hover:border-p-3 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-n-1 mb-2 group-hover:text-p-3 transition-colors">
                  Whatsapp
                </h3>
                <p className="text-n-3">Whatsapp/Ezéckiel Tadagbé</p>
              </a>
              <a
                href="https://www.facebook.com/ezechiel.tadagbe"
                target="_blank"
                rel="noreferrer"
                className="p-6 border border-stroke-1 rounded-lg hover:border-p-3 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-n-1 mb-2 group-hover:text-p-3 transition-colors">
                  Facebook
                </h3>
                <p className="text-n-3">Ezéckiel Tadagbé</p>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
