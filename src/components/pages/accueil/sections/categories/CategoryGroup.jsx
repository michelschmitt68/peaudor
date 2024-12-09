import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const CategoryGroup = ({ group }) => {
  return (
    <div>
      <GroupTitle>{group.group}</GroupTitle>
      <Grid>
        {group.categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </Grid>
    </div>
  );
};

export default CategoryGroup;

// Styled-components
const GroupTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
