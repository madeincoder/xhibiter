import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Categories from "@/components/homes/common/Categories";
import Hero from "@/components/homes/home-1/Hero";
import Hotbids from "@/components/homes/home-1/Hotbids";
import Process from "@/components/homes/common/Process";
import Testimonials from "@/components/homes/common/Testimonials";
import Collections from "@/components/pages/Collections";

export const metadata = {
  title:
    "Créez et financez votre film avec les NFT et la crypto ALI Marketplace",
  description:
    "Réalisez votre propre film grâce à la blockchain et aux NFT. Financement participatif via crypto et tokens, monétisation décentralisée et diffusion sur une marketplace innovante. Rejoignez la révolution du cinéma Web3 !",
  icons: {
    shortcut: "../../../public/img/Transparent logo black.png",
  },
};
export default function HomePage1() {
  return (
    <>
      <Header1 />
      <main>
        <Hero />
        <Hotbids />
        <Collections />
        <Categories />
        <Testimonials />
        <Process />
      </main>
      <Footer1 />
    </>
  );
}
