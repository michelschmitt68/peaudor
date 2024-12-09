import React from 'react';
import PlanityWidget from '../../../utils/PlanityWidget';
import './MonComptePage.css';

const MonComptePage = () => {
  return (
    <div className="page-container">
      <PlanityWidget containerType="account" />
    </div>
  );
};

export default MonComptePage;
