import React from 'react'
import Caroussel from "./Caroussel";
import Categories from "./Categories";
import AboutSection from "./AboutSection";
import TeamSection from './TeamSection';
import GiftCardsSection from './GiftCardsSection';
import Contact from "./Contact";
import Separator from '../../reusableUI/Separator';
import ProductsSection from './ProductsSection';


const AccueilPage = () => {
  return (
    <div>
      <Caroussel />
      <Separator />
      <Categories />
      <Separator />
      <AboutSection />
      <ProductsSection />
      <TeamSection />
      <GiftCardsSection />
      <Contact />
     </div> 
  )
}

export default AccueilPage
