import React from 'react'
import Caroussel from "./sections/Caroussel";
import Categories from "./sections/categories/Categories";
import AboutSection from "./sections/AboutSection";
import TeamSection from './sections/TeamSection';
import GiftCardsSection from './sections/GiftCardsSection';
import Separator from '../../reusableUI/Separator';
import ProductsSection from './sections/ProductsSection';
import NewsletterSection from './sections/NewsletterSection';
import PromotionsSection from './sections/PromotionsSection';


const AccueilPage = () => {
  return (
    <div>
      <Caroussel />
      <Separator />
      <PromotionsSection />
      <Separator />
      <Categories />
      <Separator />
      <ProductsSection />
      <AboutSection />
      <GiftCardsSection />
      <TeamSection />
      <NewsletterSection />
    </div>
  )
}

export default AccueilPage
