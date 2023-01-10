import style from "style-component";
import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  width: auto;
  margin: auto;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
`;

export const InputContiner = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  border: none;
  background-color: rgb(232, 226, 225);
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
`;

export const Paragraph = styled.p``;
