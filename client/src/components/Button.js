import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #DCDCDC;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #000000;
  background-color: #FFFFFF;
  textDecoration: 'none';
  color: '#000000';
  cursor: 'pointer';
`;

const Button = props => (
  <ButtonElement onClick={props.onClick} className={props.className}>
    {props.text}
  </ButtonElement>
);

export default Button;
