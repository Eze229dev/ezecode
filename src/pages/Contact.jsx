import { useState } from 'react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';



export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    // In production, this would send to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 800));

    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 lg:py-20 border-b border-stroke-1">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-n-1 mb-6">Let's Connect</h1>
            <p className="text-lg text-n-3 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a specific challenge in mind or just want to have a conversation, don't hesitate to reach out.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-n-8 border border-p-3 rounded-lg p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-bold text-p-3 mb-3">Message Sent! </h2>
                <p className="text-n-2 mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <p className="text-n-3 text-sm">
                  In the meantime, feel free to check out my recent projects.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-n-1 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                    value={formData.email}
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
                    value={formData.message}
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
            )}
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
                  Facebock
                </h3>
                <p className="text-n-3">Ezéckiel Tadagbé</p>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
