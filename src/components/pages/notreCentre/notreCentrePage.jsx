import React from 'react';
import './NotreCentrePage.css';

const NotreCentrePage = () => {
  return (
    <div className="notre-centre-page"> {/* Ajout d'une classe spécifique */}
      {/* Header */}
      <header className="header">
        <h1>Peau d'Or</h1>
      </header>

      {/* Description Section */}
      <section className="description">
        <p>
          Peau d'Or est un centre de bien-être spécialisé dans l'amincissement, le bronzage et une gamme de services de beauté. 
          Nous sommes fiers de vous offrir une expérience complète pour vous aider à vous sentir bien dans votre peau.
        </p>
        <br />
        <p>
          Notre équipe d'expertes qualifiées propose des services d'amincissement personnalisés pour vous aider à atteindre vos objectifs de tonification du corps. 
          Nous utilisons des techniques avancées et des équipements de pointe pour vous offrir des résultats visibles et durables.
        </p>
        <br />
        <p>
          En plus de nos services d'amincissement, nous proposons également des séances de bronzage pour vous donner un teint doré et naturel toute l'année.
        </p>
        <br />
        <p>
          Chez Peau d'Or, nous comprenons que la beauté ne se limite pas seulement à la silhouette et au bronzage. 
          C'est pourquoi nous proposons également d'autres services tels que la beauté du regard, du sourire, des mains et des pieds, ainsi que des soins du visage et du corps.
        </p>
        <br />
        <p>
          Nous sommes dévoués à votre bien-être et votre satisfaction. Notre équipe est là pour vous conseiller et vous accompagner tout au long de votre parcours de beauté. 
          Nous utilisons des produits de haute qualité et des techniques sûres pour vous offrir des résultats exceptionnels.
        </p>
        <br />
        <p>
          Contactez-nous dès aujourd'hui pour prendre rendez-vous et découvrir comment Peau d'Or peut vous aider à vous sentir mieux.
        </p>
        <br />
        <p>
          <strong>Parking gratuit, facile d'accès.</strong>
        </p>
      </section>

      {/* Opening Hours Section */}
      <section className="opening-hours">
        <h2>Horaires d'ouverture</h2>
        <ul>
          <li><span>Lundi:</span> 09:00 - 19:00</li>
          <li><span>Mardi:</span> 09:00 - 18:00</li>
          <li><span>Mercredi:</span> 09:00 - 19:00</li>
          <li><span>Jeudi:</span> 10:00 - 20:00</li>
          <li><span>Vendredi:</span> 08:00 - 20:00</li>
          <li><span>Samedi:</span> 09:00 - 14:00</li>
          <li><span>Dimanche:</span> 10:00 - 12:00</li>
        </ul>
      </section>
    </div>
  );
};

export default NotreCentrePage;
