import { Helmet } from "react-helmet-async";

import { HomeHero } from "./HomeHero";
import { HomeWork } from "./HomeWork";
import { HomeCapabilities } from "./HomeCapabilities";
import { HomeProblem } from "./HomeProblem";
import { Footer } from "../../components/Footer";
import { HomeProcess } from "./HomeProcess";
import { HomeReady } from "./HomeReady";

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Custom Software & Digital Solutions | Venture Technologies
        </title>

        <meta
          name="description"
          content="Venture Technologies builds custom software, websites, mobile applications, automations and digital solutions for businesses in South Africa and internationally."
        />

        <link rel="canonical" href="https://venturetechnologies.co/" />

        <meta
          property="og:title"
          content="Custom Software & Digital Solutions | Venture Technologies"
        />
        <meta
          property="og:description"
          content="Custom software, websites, mobile applications, automations and digital solutions built around real business problems."
        />
        <meta property="og:url" content="https://venturetechnologies.co/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software & Digital Solutions | Venture Technologies"
        />
        <meta
          name="twitter:description"
          content="Custom software, websites, mobile applications, automations and digital solutions built around real business problems."
        />
        <meta
          name="twitter:image"
          content="https://venturetechnologies.co/images/Logo.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://venturetechnologies.co/#organization",
            name: "Venture Technologies",
            url: "https://venturetechnologies.co/",
            logo: "https://venturetechnologies.co/images/Logo.webp",
            description:
              "Venture Technologies is a South African technology company building custom software, websites, mobile applications, automations and digital solutions for businesses in South Africa and internationally.",
            founder: {
              "@type": "Person",
              name: "Johan Kleyn",
            },
            areaServed: [
              {
                "@type": "Country",
                name: "South Africa",
              },
              "Worldwide",
            ],
            knowsAbout: [
              "Custom Software Development",
              "Web Development",
              "Mobile Application Development",
              "Business Automation",
              "System Integration",
              "Data and Business Intelligence",
              "Digital Solutions",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "johan@venturetechnologies.co",
              telephone: "+27 81 460 5994",
              contactType: "sales",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://venturetechnologies.co/#website",
            url: "https://venturetechnologies.co/",
            name: "Venture Technologies",
            publisher: {
              "@id": "https://venturetechnologies.co/#organization",
            },
          })}
        </script>
      </Helmet>

      <HomeHero />
      <HomeWork />
      <HomeCapabilities />
      <HomeProblem />
      <HomeProcess />
      <HomeReady />
      <Footer />
    </>
  );
}
