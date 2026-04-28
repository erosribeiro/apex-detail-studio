export const metadata = {
  metadataBase: new URL("https://apexdetailstudio.com.br"),
  title: {
    default: "Apex Detail Studio | Estética Automotiva Premium",
    template: "%s | Apex Detail Studio",
  },
  description:
    "Estúdio de estética automotiva premium em Belo Horizonte. Lavagem técnica, polimento, proteção cerâmica e detailing de alta qualidade para seu veículo.",
  keywords: [
    "estética automotiva",
    "detailing",
    "polimento",
    "proteção cerâmica",
    "lavagem técnica",
    "Belo Horizonte",
    "MG",
  ],
  authors: [{ name: "Apex Detail Studio" }],
  creator: "Apex Detail Studio",
  publisher: "Apex Detail Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://apexdetailstudio.com.br",
    siteName: "Apex Detail Studio",
    title: "Apex Detail Studio | Estética Automotiva Premium",
    description:
      "Estúdio de estética automotiva premium em Belo Horizonte. Lavagem técnica, polimento, proteção cerâmica e detailing de alta qualidade.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Detail Studio - Estética Automotiva Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Detail Studio | Estética Automotiva Premium",
    description:
      "Estúdio de estética automotiva premium em Belo Horizonte. Lavagem técnica, polimento, proteção cerâmica.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};