import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AgriCore AI - Smart Farming for Every Farmer, Everywhere",
  description:
    "AgriCore AI is a global agricultural intelligence platform designed to help farmers make better decisions using AI, real-time data, and localized guidance.",
  icons: {
    icon: "/assets/images/favicon.svg",
    apple: "/assets/images/favicon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-js" lang="zxx">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        <link rel="preload" href="/assets/images/hero/phone.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/assets/fonts/LineIcons.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/LineIcons.woff" as="font" type="font/woff" crossOrigin="anonymous" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/LineIcons.2.0.css" />

        <Script id="load-css-fn" strategy="beforeInteractive">
          {`!function(e){"use strict";var t=function(t,n,r){function o(e){return i.body?e():void setTimeout(function(){o(e)})}function d(){a.addEventListener&&a.removeEventListener("load",d),a.media=r||"all"}var a,i=e.document,a=i.createElement("link");if(n)a.href=n;if(r||(r="print",a.onloadcssdefined=function(e){for(var t,n=a.sheet.cssRules,i=0;i<n.length;i++)e.test(n[i].cssText)&&(e(),t=!0);t||e()}),a.rel="stylesheet",a.addEventListener&&a.addEventListener("load",d),a.onloadcssdefined&&a.onloadcssdefined(d),!a.href)return;o(function(){i.head.appendChild(a)})};"undefined"!=typeof exports?exports.loadCSS=t:e.loadCSS=t}("undefined"!=typeof global?global:this);`}
        </Script>
        <Script id="async-css-loader" strategy="beforeInteractive">
          {`loadCSS("/assets/css/animate.css");loadCSS("/assets/css/tiny-slider.css");loadCSS("/assets/css/glightbox.min.css");`}
        </Script>
        <noscript>
          <link rel="stylesheet" href="/assets/css/animate.css" />
          <link rel="stylesheet" href="/assets/css/tiny-slider.css" />
          <link rel="stylesheet" href="/assets/css/glightbox.min.css" />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
