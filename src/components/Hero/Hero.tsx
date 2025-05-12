// Серверный компонент (без "use client" директивы)
import ClientHero from "./ClientHero";

// Серверный компонент Hero
const Hero = () => {
  return <ClientHero />;
};

export default Hero;
