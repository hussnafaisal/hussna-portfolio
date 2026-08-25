import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "../styles/contact.css";

export default function Contact() {
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

              <a href="mailto:hussnafaisl01@email.com" className="contact-item">

                <div className="contact-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <small>EMAIL</small>
                  <strong>hussnafaisal01@email.com</strong>
                </div>

              </a>


              <a href="tel:+923080228992" className="contact-item">

                <div className="contact-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <small>PHONE</small>
                  <strong>+92 308 0228992</strong>
                </div>

              </a>


              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <small>LOCATION</small>
                  <strong>Faisalabad, Punjab ,Pakistan</strong>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT FORM */}

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label>
                  YOUR EMAIL
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                SUBJECT
              </label>

              <input
                type="text"
                placeholder="What is this about?"
              />

            </div>


            <div className="form-group">

              <label>
                MESSAGE
              </label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>

            </div>


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

            <a href="mailto:hussnafaisal01@email.com">
              START A CONVERSATION
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>


     
         
</div>
    

    </section>
  );
}