import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 1;
  background: url(/Soins/photos/backgroundCategories.jpg);
  background-size: cover;
  background-position: top;
  @media (max-width: 1200px) {
    background-position: left;
  }
  @media (max-width: 768px) {
    background-position: left;
    padding: 0px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Content = styled.div`
  line-height: 1.8;
  color: #000;
`;

export const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Container = styled.div`
  max-width: 1400px;
  padding: 5rem;
  border-radius: 8px;
  background-color: #252424b5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;
  margin-top: 80px;
  border: solid 2px ${({ theme }) => theme.colors.white || "#1a73e8"};
  font-weight: 500;
  font-family: 'Source Sans Pro';
  @media (max-width: 1200px) {
    padding: 2.5rem;
    width: 95%;
  }
  @media (max-width: 1200px) {
    padding: 2.5rem;
    width: 95%;
  }  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 6rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const InteractiveSection = styled.div`
  margin-bottom: 4rem;
`;

export const InteractiveTitle = styled.h2`

  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.white || "#1a73e8"};
  cursor: pointer;
  margin-bottom: 2rem;
  &:hover {
    color: #b68d2c;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ffffff;
  max-width: 1000px;
`;

export const Text = styled.div`
  font-size: 1.1rem;
  color: #dbdbdb;
  margin-bottom: 2rem;
  max-width: 1000px;
  padding-left: 1.5rem;

  a{
    color:rgb(71, 172, 46);
    margin: 0 10px;
    font-weight: 600;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
  }

  .cat{
    color: #b68d2c;
    font-weight: 500;
  }
  .description {
    margin-left: 20px;
  }

  ul {
    margin-top: 0.5rem;
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    .details-container {
      display: flex;
      justify-content: space-between;
      width: 150px;
      @media (max-width: 1200px) {
        width: 100px;
      }
      @media (max-width: 768px) {
        width: 80px;
      }
    }

    .duration {
      text-align: left;
      margin-right: auto;
      color: white;
      font-size: 1rem;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }

    .price {
      text-align: right;
      color: #b68d2c;
      font-weight: 700;
      margin-left: auto;

      .info{
        color: #b2aea4;
        font-weight: 500;
        font-style: italic;
        margin-right: 5px;
        font-size: 0.8rem;
      }
    }

    /* a.highlight-link {
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
}

a.highlight-link span {
  font-size: 1.1rem;
  font-weight: bold;
  color:rgb(255, 255, 255);
}

a.highlight-link:hover {
  text-decoration: underline;
} */



  }
`;

export const TextAnswer = styled.div`
  font-size: 1.1rem;
  color: #dbdbdb;
  margin-bottom: 2rem;
  max-width: 1000px;

  li {
    list-style-type: none;
    margin-bottom: 30px;
    margin-left: 20px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary || "#1a73e8"};
    margin-left: 0px;
    cursor: pointer;
  }

  p{
    margin-top: 1rem;
  }
`;
