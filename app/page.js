import HomePage1 from "./(homes)/home-1/page";

export const metadata = {
  title:
    "Créez et financez votre film avec les NFT et la crypto ALI Marketplace",
  description:
    "Réalisez votre propre film grâce à la blockchain et aux NFT. Financement participatif via crypto et tokens, monétisation décentralisée et diffusion sur une marketplace innovante. Rejoignez la révolution du cinéma Web3 !",
  icons: {
    shortcut: "../../../public/img/Transparent logo black.png",
  },
};

export default function Home() {
  return (
    <>
      <HomePage1 />
    </>
  );
}
