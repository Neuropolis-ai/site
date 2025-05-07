import { useTheme } from "@/context/ThemeContext";
import "@/style/hero.css";
import "@/style/text-animations.css";
import ClientHero from "./ClientHero";

// Серверный компонент Hero
const Hero = () => {
  return <ClientHero />;
};

export default Hero;
