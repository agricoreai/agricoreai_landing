import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support - AgriCore AI",
  description: "Get help with AgriCore AI. FAQs, contact options, and resources for farmers.",
};

export default function SupportPage() {
  return (
    <>
      <Header sticky />
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3>Support</h3>
                <h2>How Can We Help You?</h2>
                <p>
                  Find answers to common questions, get in touch with our team, or explore our resources.
                </p>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "40px" }}>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="single-feature" style={{ padding: "30px", background: "#f9f9f9", borderRadius: "8px", height: "100%" }}>
                <div className="feature-icon crop" style={{ marginBottom: "20px" }}>
                  <i className="lni lni-envelope" style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3>Email Support</h3>
                <p>Reach our support team directly. We typically respond within 24–48 hours.</p>
                <a href="mailto:support@agricoreai.com" className="btn" style={{ marginTop: "15px" }}>
                  support@agricoreai.com
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="single-feature" style={{ padding: "30px", background: "#f9f9f9", borderRadius: "8px", height: "100%" }}>
                <div className="feature-icon livestock" style={{ marginBottom: "20px" }}>
                  <i className="lni lni-phone" style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3>Phone Support</h3>
                <p>Need immediate assistance? Call us for urgent farming-related queries.</p>
                <a href="tel:+2207023988" className="btn" style={{ marginTop: "15px" }}>
                  +220 7023988
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="single-feature" style={{ padding: "30px", background: "#f9f9f9", borderRadius: "8px", height: "100%" }}>
                <div className="feature-icon fish" style={{ marginBottom: "20px" }}>
                  <i className="lni lni-comments-alt" style={{ fontSize: "2rem", color: "#fff" }} />
                </div>
                <h3>Contact Form</h3>
                <p>Send us a message with your questions or feedback through our contact form.</p>
                <Link href="/#contact" className="btn" style={{ marginTop: "15px" }}>
                  Go to Contact
                </Link>
              </div>
            </div>
          </div>

          <div id="faq" className="row" style={{ marginTop: "60px" }}>
            <div className="col-12">
              <h2 className="text-center" style={{ marginBottom: "40px" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <style>{`#faqAccordion .accordion-body { color: #081828; }`}</style>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                      aria-expanded="true"
                    >
                      What is AgriCore AI?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AgriCore AI is a global agricultural intelligence platform that helps farmers make better
                      decisions using AI, real-time data, and localized guidance. It covers crop guidance, livestock
                      management, fish farming, climate intelligence, market access, and more.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      What devices does AgriCore AI support?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AgriCore AI is available on iOS (App Store) and Android (Google Play). The app works on
                      smartphones and tablets.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      What countries does AgriCore AI support?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AgriCore AI is designed for farmers worldwide. We support over 100 countries with localized
                      weather, crop recommendations, and market data.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      How do I report a bug or issue?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Please email support@agricoreai.com with a description of the issue, your device type, and
                      screenshots if applicable. We prioritize bug reports and will get back to you soon.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq5"
                    >
                      What languages does AgriCore AI support?
                    </button>
                  </h3>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      AgriCore AI is available in multiple languages to serve farmers globally. Check the app store
                      listing for the current language offerings in your region.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <a href="#" className="scroll-top">
        <i className="lni lni-chevron-up" />
      </a>
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
    </>
  );
}
