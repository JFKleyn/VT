import { HomeAbout } from "./HomeAbout";
import { HomeHero } from "./HomeHero";
import { HomeServices } from "./HomeServices";
import { HomeWhy } from "./HomeWhy";
import { HomeProcess } from "./HomeProcess";
import { HomeReady } from "./HomeReady";
import { Footer } from "../../components/Footer";

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeWhy />
      <HomeProcess />
      <HomeReady />
      <Footer />
    </>
  );
}