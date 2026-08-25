import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const whatsappMessage = `Hello Hussna,

I found your portfolio and would like to discuss a project with you.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Thank you.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/923080228992?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* HEADER */}

        <div className="contact-header">

          <div className="section-number">
            05 <span>—</span> LET'S CONNECT
          </div>

          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <span> GREAT.</span>
          </h2>

          <p>
            Have an idea, project or opportunity?
            Let's turn it into something beautiful.
          </p>

        </div>


        {/* CONTACT AREA */}

        <div className="contact-grid">

          {/* LEFT */}

          <div className="contact-info">

            <div className="contact-intro">
              <span>GET IN TOUCH</span>

              <h3>
                Let's talk about
                <br />
                your next project.
              </h3>
            </div>


            <div className="contact-items">

              {/* EMAIL */}

              <a
                href="mailto:hussnafaisal01@email.com"
                className="contact-item"
              >

                <div className="contact-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <small>EMAIL</small>
                  <strong>
                    hussnafaisal01@email.com
                  </strong>
                </div>

              </a>


              {/* PHONE */}

              <a
                href="tel:+923080228992"
                className="contact-item"
              >

                <div className="contact-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <small>PHONE</small>
                  <strong>
                    +92 308 0228992
                  </strong>
                </div>

              </a>


              {/* LOCATION */}

              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>
                    Faisalabad, Punjab, Pakistan
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              {/* NAME */}

              <div className="form-group">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                />

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label>
                  YOUR EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                />

              </div>

            </div>


            {/* SUBJECT */}

            <div className="form-group">

              <label>
                SUBJECT
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
              />

            </div>


            {/* MESSAGE */}

            <div className="form-group">

              <label>
                MESSAGE
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              ></textarea>

            </div>


            {/* SEND */}

            <button type="submit">

              SEND MESSAGE

              <ArrowUpRight size={17} />

            </button>

          </form>

        </div>


        {/* BIG CTA */}

        <div className="contact-cta">

          <div className="cta-glow"></div>

          <div className="cta-content">

            <span>
              AVAILABLE FOR FREELANCE
            </span>

            <h3>
              HAVE A PROJECT
              <br />
              IN MIND?
            </h3>

            <a
              href="https://wa.me/923080228992"
              target="_blank"
              rel="noopener noreferrer"
            >
              START A CONVERSATION
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}