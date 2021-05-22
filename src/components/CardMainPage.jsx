import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import color from '../assets/predeterminatedStyles';


const EachMealCard = styled.div`
  background-color: white;
  height: 112px;
  padding: 16px;
  border-radius: 20px;
  max-width: 87%;
  margin: 16px auto;
  display: flex;
  cursor: pointer;
`;

const EachMealImage = styled.img`
  height: 100%;
  width: 80px;
`;
const EachMealDescriptionContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EachMealFlavor = styled.p`
  color: ${color.blackColor};
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
`;

const EachMealPrice = styled.p`
  color: ${color.primaryColor};
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

function CardMainPage(props) {
  return (
    <div>
      {props.data.map((eachMeal) => {
        return (
            
          <EachMealCard key={eachMeal.id}>
           <Link to={`/shop/${eachMeal.id}`}> <EachMealImage src={eachMeal.imageUrl} /></Link>
            <EachMealDescriptionContainer>
              <EachMealFlavor>{eachMeal.name}</EachMealFlavor>
              <EachMealPrice>$ {eachMeal.price} MXN</EachMealPrice>
            </EachMealDescriptionContainer>
          </EachMealCard>
        );
      })}
    </div>
  );
}

export default CardMainPage;
