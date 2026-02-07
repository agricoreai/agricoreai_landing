import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - AgriCore AI",
  description: "AgriCore AI Privacy Policy. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header sticky />
      <section className="section" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3>Privacy Policy</h3>
                <h2>Your Privacy Matters</h2>
                <p>Last updated: February 7, 2025</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div style={{ maxWidth: "800px", margin: "0 auto", color: "#081828" }}>
                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>1. Introduction</h3>
                  <p>
                    AgriCore AI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard your information when you use
                    our mobile application, website, and related services.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>2. Information We Collect</h3>
                  <p>We collect information that you provide directly to us, including:</p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li><strong>Account information:</strong> name, email address, phone number, country</li>
                    <li><strong>Farming data:</strong> crop types, livestock information, farm location, photos</li>
                    <li><strong>Usage data:</strong> app features used, queries, preferences</li>
                    <li><strong>Contact information:</strong> when you reach out via email or contact forms</li>
                  </ul>
                </section>

                <section id="data-protection" style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>3. Data Protection</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data
                    against unauthorized access, alteration, disclosure, or destruction. This includes:
                  </p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li>Encryption of data in transit and at rest</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security assessments</li>
                    <li>Compliance with applicable data protection regulations (GDPR, CCPA, etc.)</li>
                  </ul>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>4. How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li>Provide and improve our agricultural intelligence services</li>
                    <li>Deliver personalized crop and livestock recommendations</li>
                    <li>Process your requests and provide customer support</li>
                    <li>Send important updates about the service (with your consent)</li>
                    <li>Analyze usage patterns to improve our AI models</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section id="cookies" style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>5. Cookies and Tracking</h3>
                  <p>
                    Our website may use cookies and similar technologies to enhance your experience. We use:
                  </p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li><strong>Essential cookies:</strong> required for site functionality</li>
                    <li><strong>Analytics cookies:</strong> help us understand how visitors use our site</li>
                    <li><strong>Preference cookies:</strong> remember your settings</li>
                  </ul>
                  <p style={{ marginTop: "15px" }}>
                    You can control cookie preferences through your browser settings.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>6. Data Sharing</h3>
                  <p>
                    We do not sell your personal data. We may share your information with:
                  </p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li>Service providers who assist our operations (under strict data processing agreements)</li>
                    <li>Partners who help deliver localized agricultural data (aggregated/anonymized where possible)</li>
                    <li>Law enforcement when required by law</li>
                  </ul>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>7. Your Rights</h3>
                  <p>Depending on your location, you may have the right to:</p>
                  <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
                    <li>Access, correct, or delete your personal data</li>
                    <li>Object to or restrict processing</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                    <li>Lodge a complaint with a supervisory authority</li>
                  </ul>
                  <p style={{ marginTop: "15px" }}>
                    To exercise these rights, contact us at <a href="mailto:privacy@agricoreai.com">privacy@agricoreai.com</a>.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>8. Data Retention</h3>
                  <p>
                    We retain your data only as long as necessary to provide our services, comply with legal
                    obligations, or resolve disputes. Farming data used for AI improvements may be retained in
                    anonymized form.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>9. International Transfers</h3>
                  <p>
                    AgriCore AI serves farmers globally. Your data may be processed in countries outside your
                    residence. We ensure appropriate safeguards (e.g., standard contractual clauses) when
                    transferring data internationally.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>10. Children&apos;s Privacy</h3>
                  <p>
                    Our services are not directed at children under 16. We do not knowingly collect personal
                    information from children. If you believe we have collected such data, please contact us
                    immediately.
                  </p>
                </section>

                <section style={{ marginBottom: "40px" }}>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>11. Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of material changes
                    via email or in-app notification. Continued use of our services after changes constitutes
                    acceptance.
                  </p>
                </section>

                <section>
                  <h3 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>12. Contact Us</h3>
                  <p>
                    For privacy-related questions or requests:
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:privacy@agricoreai.com">privacy@agricoreai.com</a>
                    <br />
                    <strong>Support:</strong> <a href="mailto:support@agricoreai.com">support@agricoreai.com</a>
                    <br />
                    <strong>Address:</strong> Banjul, The Gambia
                  </p>
                </section>
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
