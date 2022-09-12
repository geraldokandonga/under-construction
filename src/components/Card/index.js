import React from "react";

import { CardContainer, CardImage } from "./CardElement";

const Card = (props) => {
  return (
    <CardContainer>
      <CardImage src={props.image} />
    </CardContainer>
  );
};

export default Card;
