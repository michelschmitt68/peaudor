import React from "react";
import styled from "styled-components";

const CategoryCard = ({ category }) => {
  return (
    <Category>
      <CategoryLink href={category.link}>
        <ImageWrapper>
          <Image src={category.img} alt={category.title} />
          <CategoryTitle>{category.title}</CategoryTitle>
          {category.warning && <WarningOverlay>{category.warning}</WarningOverlay>}
        </ImageWrapper>
      </CategoryLink>
    </Category>
  );
};

export default CategoryCard;

// Styled-components
const Category = styled.div`
  text-align: center;
`;

const CategoryLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CategoryTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgb(0 0 0 / 16%);
  color: white;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
`;

const WarningOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  font-size: 0.9rem;
  text-align: center;
  font-weight: bold;
  z-index: 1;
`;
