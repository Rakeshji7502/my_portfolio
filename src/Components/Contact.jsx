
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Signature,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({
      type: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const SERVICE_ID = "portfolio_gmail";
      const TEMPLATE_ID = "template_uhma20c";
      const PUBLIC_KEY = "Brn52uQ0Y_YC0Pqlk";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I will get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900 border border-gray-800 text-blue-400 text-xs font-medium mb-3">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a project idea, job opportunity or collaboration in mind?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Contact Information */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-8">

            <div className="flex items-center gap-3 mb-6">

              <div className="w-11 h-11 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Contact Information
                </p>

                <h3 className="text-xl font-bold text-gray-100">
                  Let's Connect
                </h3>
              </div>

            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              I am open to opportunities related to Full Stack Development,
              MERN Stack, React.js, Node.js and web application development.
            </p>

            {/* Email */}
            <a
              href="mailto:r.mishraa41@gmail.com"
              className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-gray-800/70 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Mail size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-200">
                  r.mishraa41@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919584207502"
              className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-gray-800/70 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform">
                <Phone size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Phone
                </p>

                <p className="mt-1 text-sm text-gray-200">
                  +91 95842 07502
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-gray-800/70 border border-gray-700">
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-purple-400">
                <MapPin size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-sm text-gray-200">
                  Indore, Madhya Pradesh, India
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rakeshmishra7502/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-4 p-4 rounded-xl bg-gray-800/70 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Signature size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm text-gray-200">
                  Connect with me on LinkedIn
                </p>
              </div>
            </a>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-8">

            <div className="mb-6">
              <p className="text-xs text-gray-500">
                Send a Message
              </p>

              <h3 className="mt-1 text-xl font-bold text-gray-100">
                Start a Conversation
              </h3>
            </div>

            {/* Success Message */}
            {status.type === "success" && (
              <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <CheckCircle2
                  size={20}
                  className="text-green-400 shrink-0 mt-0.5"
                />

                <p className="text-sm text-green-400 leading-relaxed">
                  {status.message}
                </p>
              </div>
            )}

            {/* Error Message */}
            {status.type === "error" && (
              <div className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <AlertCircle
                  size={20}
                  className="text-red-400 shrink-0 mt-0.5"
                />

                <p className="text-sm text-red-400 leading-relaxed">
                  {status.message}
                </p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-xs font-medium text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  disabled={isSending}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 text-sm outline-none placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-xs font-medium text-gray-400"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  disabled={isSending}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 text-sm outline-none placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all disabled:opacity-60"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-xs font-medium text-gray-400"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  disabled={isSending}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 text-sm outline-none placeholder:text-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all resize-none disabled:opacity-60"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Send Message
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

