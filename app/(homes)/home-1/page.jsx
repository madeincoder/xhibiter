import Footer1 from "@/components/footer/Footer1";
import Header1 from "@/components/headers/Header1";
import Categories from "@/components/homes/common/Categories";
import Hero from "@/components/homes/home-1/Hero";
import Hotbids from "@/components/homes/home-1/Hotbids";
import Process from "@/components/homes/common/Process";
import Testimonials from "@/components/homes/common/Testimonials";
import Collections from "@/components/pages/Collections";

export const metadata = {
  title: "Home 1 || Xhibiter | NFT Marketplace Nextjs Template",
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
