import logo from "../../logo.png";
import { Helmet } from "react-helmet";
export default function SEOHead() {
  let url = "kanav-frontend-developer";
  let title = "SpaceX Landing Page";
  let schemaData = {
    "@context": "http://schema.org/",
    "@type": "SoftwareApplication",
    applicationCategory: "MultimediaApplication",
    operatingSystem: ["Windows", "macOS", "Android", "iOS"],
    screenshot: "kanav-frontend-developer",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingCount: "38192",
      reviewCount: "38192",
      bestRating: "5",
      ratingValue: "4.9",
      worstRating: "1",
      alternateName: "StoriesIG",
      mainEntityOfPage: "kanav-frontend-developer",
      name: " Instagram Anonymous Story Viewer",
    },
    alternativeHeadline: " Instagram Anonymous Story Viewer",
    copyrightYear: "2023",
    headline: "Instagram Anonymous Story Viewer",
    keywords: "Instagram Anonymous Story Viewer",
    offers: {
      "@type": "Offer",
      price: "0.0",
      priceCurrency: "USD",
      alternateName: "Instagram Anonymous Story Viewer",
      description: "Instagram Anonymous Story Viewer",
      mainEntityOfPage: "kanav-frontend-developer",
      name: "Instagram Anonymous Story Viewer",
    },
    alternateName: "Instagram Anonymous Story Viewer",
    mainEntityOfPage: "kanav-frontend-developer",
    name: "Instagram Anonymous Story Viewe",
  };
  return (
    <Helmet>
      <title> {title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content="SpaceX designs, manufactures and launches advanced rockets
        and spacecraft."
      />
      <meta
        name="robots"
        content="index,follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <link rel="canonical" href="kanav-frontend-developer"></link>
      <meta name="og_locale" content="en_US" />
      <meta name="og_type" content="tool" />
      <meta name="og_title" content="SpaceX Landing Page" />
      <meta
        name="og_description"
        content="SpaceX designs, manufactures and launches advanced rockets
        and spacecraft."
      />
      <meta name="og_site_name" content="SpaceX Landing Page" />
      <link rel="shortcut icon" href="/M.jpg" />
      <meta property="og:title" content="SpaceX Landing Page" />
      <meta
        property="og:description"
        content="SpaceX designs, manufactures and launches advanced rockets
and spacecraft."
      />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={title} />
      <meta property="article:section" content="Tools" />
      <meta property="og:image" content={logo} />
      <meta property="og:image:secure_url" content={url} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="SpaceX designs, manufactures and launches advanced rockets
        and spacecraft."
      />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Max Steel" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="4 minutes"></meta>
      <meta name="twitter:site" content="kanav-frontend-developer"></meta>
      <link rel="alternate" hrefLang="en" href="kanav-frontend-developer" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Helmet>
  );
}
