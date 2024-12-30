import React from 'react';
import PlanityWidget from '../../../utils/PlanityWidget';
import './RendezVousPage.css';


const RendezVousPage = () => {
  return (
    <div className="page-container">
      <PlanityWidget containerType="appointment" />
    </div>
    
  );
};

export default RendezVousPage;
