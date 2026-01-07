// @ts-nocheck
import React from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent successfully!");
    e.target.reset(); // Optional: clears the form
  };

  return (
    <div className="bg-base-100 dark:bg-base-200 py-20 px-4 md:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
          Contact Us
        </h1>
        <p className="text-base-content text-lg md:text-xl leading-relaxed">
          Have questions or need help? Reach out to us and we'll get back to you
          as soon as possible.
        </p>
      </div>

      {/* Form + Illustration Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-base-200 dark:bg-base-300 p-10 rounded-xl shadow-xl">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="label-text text-base-content">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-base-100 dark:bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-base-100 dark:bg-base-200 text-base-content focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-base-content">Message</span>
              </label>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-base-100 dark:bg-base-200 text-base-content h-32 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary transition"
                required
              ></textarea>
            </div>

            <button className="btn btn-primary dark:btn-secondary w-full mt-4">
              Send Message
            </button>
          </form>
        </div>

        {/* Illustration / Visual */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm h-80 bg-gradient-to-tr from-primary to-secondary rounded-xl shadow-lg flex items-center justify-center text-white text-4xl font-bold animate-pulse">
            📬
          </div>
        </div>
      </div>

      {/* Optional Contact Info */}
      <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
        <p className="text-base-content">
          Or reach us directly at:{" "}
          <a
            href="mailto:support@example.com"
            className="text-primary dark:text-secondary underline"
          >
            siescoms@example.com
          </a>
        </p>
        <p className="text-base-content">
          Follow us on social media:{" "}
          <a
            href="#"
            className="text-primary dark:text-secondary underline ml-1"
          >
            Instagram
          </a>
          ,{" "}
          <a
            href="#"
            className="text-primary dark:text-secondary underline ml-1"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
