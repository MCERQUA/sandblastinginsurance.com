import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "sandblasting insurance",
    "abrasive blasting insurance",
    "sandblasting contractor insurance",
    "contractor pollution liability sandblasting",
    "sandblasting general liability",
    "sandblasting workers comp",
    "blasting equipment insurance",
    "sandblasting surety bond",
    "industrial contractor insurance",
    "silica dust liability coverage",
    "lead paint abatement insurance",
    "sandblasting commercial auto",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Commercial insurance for sandblasting and abrasive blasting contractors — GL, contractor pollution liability, tools & equipment, workers' comp, commercial auto, umbrella, inland marine, and surety bonds. A-rated carriers. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — sandblasting contractor coverage` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Insurance for sandblasting and abrasive blasting contractors — GL, CPL, tools & equipment, workers' comp, commercial auto, umbrella, and bonds. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "General Liability Insurance for Sandblasting Contractors",
      "Tools and Equipment Insurance for Abrasive Blasting",
      "Contractor Pollution Liability for Sandblasting",
      "Workers Compensation for Sandblasting Contractors",
      "Commercial Auto Insurance for Blasting Contractors",
      "Umbrella Liability Insurance for Abrasive Blasting",
      "Inland Marine Insurance for Blasting Equipment",
      "Surety Bonds for Sandblasting Contractors",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
