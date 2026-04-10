import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mx-auto p-8 py-16 max-w-3xl">
      <h2 className="text-5xl font-bold text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <p className="text-lg leading-relaxed">
            I'm always open to new opportunities, collaborations, and interesting projects.
            Feel free to reach out to me through the form or using the contact details below.
          </p>
          <div className="flex items-center gap-4 text-lg">
            <Mail className="w-6 h-6 text-primary flex-shrink-0" />
            <span>jane.doe@example.com</span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Phone className="w-6 h-6 text-primary flex-shrink-0" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-start gap-4 text-lg">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <span>San Francisco, CA, USA</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-base-100 shadow-xl p-8">
          <form className="form-control gap-4">
            <div>
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="John Doe" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input type="text" placeholder="Project Inquiry" className="input input-bordered w-full" required />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-32 w-full" placeholder="Hello, I'd like to discuss..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;