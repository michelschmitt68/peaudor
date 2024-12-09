import React from 'react';
import PlanityWidget from '../../../utils/PlanityWidget';
import './NosProduitsPage.css';

const NosProduitsPage = () => {
  return (
    <div className="page-container">
      <div className="shop-container">
        <PlanityWidget containerType="onlineShop" />
      </div>
    </div>
  );
};

export default NosProduitsPage;
