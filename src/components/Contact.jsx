import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import "../styles/contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* TOP */}
        <div className="contact-label contact-reveal">
          <span>05</span>
          <i></i>
          GET IN TOUCH
        </div>

        {/* MAIN */}
        <div className="contact-main">

          <div className="contact-heading contact-reveal">

            <h2>
              LET'S BUILD
              <span> SOMETHING.</span>
            </h2>

            <p>
              Have an idea, project or opportunity?
              Let's turn it into something meaningful.
            </p>

            <a
              href="mailto:hello@hussna.dev"
              className="contact-email"
            >
              <Mail size={17} />
              hello@hussna.dev
              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* FORM */}
          <form className="contact-form contact-reveal">

            <div className="form-row">

              <div className="form-group">
                <label>YOUR NAME</label>

                <input
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label>YOUR EMAIL</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

            </div>

            <div className="form-group">
              <label>SUBJECT</label>

              <input
                type="text"
                placeholder="Let's work together"
              />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              SEND MESSAGE
              <Send size={15} />
            </button>

          </form>

        </div>

        {/* BOTTOM INFO */}
        <div className="contact-bottom contact-reveal">

          <div className="contact-info">
            <MapPin size={16} />
            <span>FAISALABAD, PAKISTAN</span>
          </div>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            AVAILABLE FOR PROJECTS
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;