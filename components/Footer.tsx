import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="single-footer f-about">
                <div className="logo">
                  <Link href="/">AgriCoreAi</Link>
                </div>
                <p>
                  Empowering every farmer with the intelligence to grow more, waste less, and earn better. Smart
                  farming for every farmer, everywhere.
                </p>
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-instagram" /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-linkedin-original" /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-youtube" /></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-pinterest" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Features</h3>
                    <ul>
                      <li>
                        <Link href="/#features">Smart Crop Guidance</Link>
                      </li>
                      <li>
                        <Link href="/#features">Livestock Farming</Link>
                      </li>
                      <li>
                        <Link href="/#features">Fish Farming</Link>
                      </li>
                      <li>
                        <Link href="/#features">Climate Intelligence</Link>
                      </li>
                      <li>
                        <Link href="/#features">Market Access</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Resources</h3>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Documentation</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Training Guides</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Video Tutorials</a>
                      </li>
                      <li>
                        <Link href="/support">Support Center</Link>
                      </li>
                      <li>
                        <Link href="/support#faq">FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Company</h3>
                    <ul>
                      <li>
                        <Link href="/#overview">About Us</Link>
                      </li>
                      <li>
                        <Link href="/#impact">Our Impact</Link>
                      </li>
                      <li>
                        <Link href="/#team">Our Team</Link>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Mission & Vision</a>
                      </li>
                      <li>
                        <Link href="/#contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="single-footer f-link">
                    <h3>Legal</h3>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Terms & Conditions</a>
                      </li>
                      <li>
                        <Link href="/privacy">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/privacy#data-protection">Data Protection</Link>
                      </li>
                        <li>
                        <Link href="/privacy#cookies">Cookie Policy</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <p className="copyright-left">&copy; 2025 AgriCore AI. All rights reserved.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <p className="copyright-center">Smart Farming for Every Farmer, Everywhere.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <p className="copyright-right">
                Powered by{" "}
                <a href="https://www.integify.io" target="_blank" rel="noopener noreferrer">
                  Integify
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
