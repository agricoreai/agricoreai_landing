import { readFileSync } from "node:fs";
import path from "node:path";
import Script from "next/script";

const homeBodyPath = path.join(process.cwd(), "lib", "home-body.html");

function getHomeHtml() {
  const html = readFileSync(homeBodyPath, "utf8");
  return html.replaceAll('href="index.html"', 'href="/"').replaceAll('src="assets/', 'src="/assets/').replaceAll('href="assets/', 'href="/assets/');
}

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getHomeHtml() }} />

      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/tiny-slider.js" strategy="afterInteractive" />
      <Script src="/assets/js/glightbox.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/count-up.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/main.js" strategy="afterInteractive" />
      <Script id="counter-init" strategy="afterInteractive">
        {`window.addEventListener('load', function () {
          if (typeof counterUp !== 'undefined') {
            var cu = new counterUp({
              start: 0,
              duration: 2000,
              intvalues: true,
              interval: 100,
              append: " ",
            });
            cu.start();
          }
        });`}
      </Script>
    </>
  );
}
