import BestSellingDishes from "./components/BestSellingDishes";
import CarouselSlider from "./components/CarouselSlider";
import PartnerClient from "./components/PartnerClient";
import TeamMember from "./components/TeamMember";


export default function Home() {
  return (
    <>
    <BestSellingDishes/>
      <CarouselSlider/>
      <TeamMember/>
      <PartnerClient/>
    </>
  );
}
