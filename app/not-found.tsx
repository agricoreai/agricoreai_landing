import Script from "next/script";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <h1>404</h1>
                <h2>Oops! Page Not Found!</h2>
                <p>
                  The page you are looking for does not exist. It might have
                  been moved or deleted.
                </p>
                <div className="button">
                  <Link href="/" className="btn">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/tiny-slider.js" strategy="afterInteractive" />
      <Script src="/assets/js/glightbox.min.js" strategy="afterInteractive" />
      <Script id="fadeout-preloader" strategy="afterInteractive">
        {`window.onload = function () {
          window.setTimeout(function fadeout() {
            var el = document.querySelector('.preloader');
            if (!el) return;
            el.style.opacity = '0';
            el.style.display = 'none';
          }, 500);
        };`}
      </Script>
    </>
  );
}
