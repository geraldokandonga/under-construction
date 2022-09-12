import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.article`
  position: relative;
  width: 384px;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  padding: 2px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 1px 35px 0 rgba(0, 0, 0, 0.3);
  }

  &:not(:first-child) {
    margin-right: 1rem;
    margin-left: 1rem;
  }

  @media (max-width: 56.25em) {
    margin-top: 0.8rem;
  }
`;

export const CardWide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 768px;
`;

export const CardMedia = styled.div`
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const CardContent = styled.div`
  color: #999999;
  transition: all 0.3s cubic-bezier(0.37, 0.75, 0.61, 1.05) 0s;
`;

export const CardCategory = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.06em;
  display: inline-block;
  color: white;
  background: #e74c3c;
  text-align: center;
  padding: 5px 15px;
  text-transform: uppercase;
`;

export const CardTitle = styled(Link)`
  font-family: "Jost";
  font-size: 20px;
  color: #010224;
  margin: 0 0 10px;
`;

export const CardDate = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #050978;
`;

export const CardText = styled.div`
  span {
    font-size: 12px;
    line-height: 16px;
    color: #6f7287;
    margin-bottom: 1.2rem;
    transition: max-height 0.3s ease-in-out;
  }

  span > * {
    font-size: 12px;
    line-height: 16px;
    color: #6f7287;
    margin-bottom: 1.2rem;
    transition: max-height 0.3s ease-in-out;
  }
`;

export const CardImageContainer = styled.div`
  width: 247px;
  height: 159px;
`;

export const CardImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 10px;
`;

export const CardMeta = styled.p`
  color: #ccc;
  font-size: 14px;
`;
