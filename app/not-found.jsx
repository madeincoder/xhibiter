import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import NotFound from "@/components/pages/404";

export const metadata = {
  title:
    "Créez et financez votre film avec les NFT et la crypto ALI Marketplace",
  description:
    "Réalisez votre propre film grâce à la blockchain et aux NFT. Financement participatif via crypto et tokens, monétisation décentralisée et diffusion sur une marketplace innovante. Rejoignez la révolution du cinéma Web3 !",
};
export default function NotFoundPage() {
  return (
    <>
      <Header1 />
      <main className="pt-[5.5rem] lg:pt-24">
        <NotFound />
      </main>
      <Footer1 />
    </>
  );
}
