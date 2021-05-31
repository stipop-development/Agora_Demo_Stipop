import styled from 'styled-components';
import { motion, transform } from "framer-motion";


export const ReactionsWrapper = styled.div`
display: flex;
flex-direction: row;
width: 9.5%;
height: 30px;
left: 480px;
top: 7px;
padding-left: 0px;
padding-right: 10px;
font-family: Roboto;
// background-color: blue;
border: 1pt groove #3f51b5;
font-size: 20px;
font-weight: 500;
margin-top: 5px;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
border-radius: 7px;
z-index: 1;
`;

export const ReactionButtonWrapper = styled(motion.img).attrs(props => ({
}))`
position: flex;
background-size: contain;
background-repeat: no-repeat;
top: 0px;
height: 30px;
z-index: 100;
//width: 35px;
//padding-right: 3px;
//padding-left: 3px;
font-family: Roboto;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
cursor: pointer;
margin-left: 6px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
// margin-top: 5px;
//border-radius: 7px;
//background-color: #000000;
z-index: 1;

`;

export const ReactionsWrapper2 = styled.div`
display: flex;
flex-direction: row;
height: 30px;
position: absolute;
top: 370px;
z-index: -1;
padding-left: 0px;
padding-right: 10px;
font-family: Roboto;
font-size: 20px;
font-weight: 500;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: normal;
border-radius: 7px;
z-index: 1;

`;