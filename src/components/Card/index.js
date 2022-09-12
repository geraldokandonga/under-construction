import React from "react";

import { CardContainer, CardContent, CardImage } from "./CardElement";

const Card = (props) => {
  return (
    <CardContainer>
      <CardContent>
        <CardImage src={props.image} />
      </CardContent>
    </CardContainer>
  );
};

export default Card;
