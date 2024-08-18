import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import MetricTools from "./metric-tools";
import { draftMode } from "next/headers";

import { VisualEditing } from "next-sanity";

const myFont = localFont({
  src: [
    {
      path: "../public/font/NeurialGrotesk-Light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/NeurialGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/NeurialGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/NeurialGrotesk-Extrabold.woff",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://density.exchange/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: "Density Exchange",
  description:
    "Buy, Sell & Trade Crypto Futures of Bitcoin, Ethereum and other cryptocurrencies with up to 125x leverage on India’s most trusted and secure Trading platform.",
  keywords: [
    "Bitcoin Trading",
    "Ethereum price",
    "BTC price",
    "Dogecoin price",
    "Buy Bitcoin in India",
    "Bitcoin Exchange in India",
    "BTC to INR",
    "bitcoin to INR",
    "Best crypto exchange",
    "Dogecoin",
    "Shiba",
    "Solana",
    "Solana buy",
    "Crypto futures india",
    "Crypto derivatives india",
    "Crypto trading india",
    "Buy crypto futures",
    "crypto exchange",
    "crypto exchange india",
    "cryptocurrency exchange",
    "crypto world trading.net login",
    "crypto trading app",
    "cryptocurrency trading",
    "cryptocurrency trading app",
    "crypto trading platform",
    "bitcoin trading",
    "delta trading",
    "coin exchange",
    "bitcoin future",
    "crypto future",
    "crypto trading india",
    "crypto options trading",
    "cryptocurrency trading platform",
    "cryptocurrency trading times",
    "cryptocurrency website",
    "what is the future of cryptocurrency",
    "btc trading",
    "crypto exchange platform",
    "crypto platform",
    "cryptocurrency exchange platform",
    "how to trade cryptocurrency",
  ],
  openGraph: {
    images:
      "https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/densitylogo.svg",
    title: "Density: Best Crypto Futures Trading Platform in India",
    description:
      "Buy, Sell & Trade Crypto Futures of Bitcoin, Ethereum and other cryptocurrencies with up to 125x leverage on India’s most trusted and secure Trading platform.",
    url: "https://density.exchange/",
    siteName: "Density Exchange",
    locale: "en_US",
    type: "website",
  },
  robots: {
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
  icons: {
    icon: "https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/density.png",
    apple:
      "https://density-uploads-dev.s3.ap-south-1.amazonaws.com/market-assets/Images/density.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="box-border m-0 p-0">
      <body className={myFont.className}>
        {children}
        {/* {draftMode().isEnabled && <LiveVisualEditing /> } */}
        {draftMode().isEnabled && (
          <VisualEditing
            zIndex={1000} // Optional
          />
        )}
        <MetricTools />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
          let url = new URL(window.location.href);
          if (url.searchParams.has('utm_id')) {
            let campaignUrl = (url.href).split("?");
            let anchorTags = document.getElementsByTagName('a');
            for (let i = 0; i < anchorTags.length; i++) {
              let href = anchorTags[i].getAttribute('href');
              if (href && href.includes('https://app.density.exchange/')) {
              // Append campaignUrl at the end
              anchorTags[i].setAttribute('href', href + (href.includes('?') ? '&' : '?') + campaignUrl[1]);
              }

          if (href && href.includes('https://app.density.exchange/auth/signin')) {
                // Append campaignUrl at the end
          anchorTags[i].setAttribute('href', href + '/auth/signin' + (href.includes('?') ? '&' : '?') + campaignUrl[1]);
              }
            }
          }
          `,
          }}
        />
        <Script
          id="facebook-events"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '338272175555534');
            fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt={"facebook pixel no script image"}
              src="https://www.facebook.com/tr?id=338272175555534&ev=PageView&noscript=1"
            />
          </noscript>
        </noscript>
      </body>
    </html>
  );
}
