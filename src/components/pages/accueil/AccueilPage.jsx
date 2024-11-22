import React from 'react'
import Caroussel from "./sections/Caroussel";
import Categories from "./sections/Categories";
import AboutSection from "./sections/AboutSection";
import TeamSection from './sections/TeamSection';
import GiftCardsSection from './sections/GiftCardsSection';
import Contact from "./sections/Contact";
import Separator from '../../reusableUI/Separator';
import ProductsSection from './sections/ProductsSection';


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
