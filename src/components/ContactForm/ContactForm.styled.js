import styled from '@emotion/styled';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;
export const Label = styled.label`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: pink;

  :focus {
    border: 1px solid blue;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  height: 35px;
  width: 200px;

  border-radius: 8px;
  ${'' /* background-color: #45f5e6; */}
  border: none;
  transition: all 250ms linear;

  :hover,
  :focus {
    background-color: violet;
    transform: scale(1.1);
  }
`;
