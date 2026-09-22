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
