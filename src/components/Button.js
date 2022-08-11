import styled from 'styled-components';

const Button = ({ children, onClick, secondary = false }) => {
  return (
    <StyledButton onClick={onClick} className={secondary && 'btn-secondary'}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  background-color: hsl(235, 69%, 61%);
  font-weight: 700;
  font-size: 2.2rem;
  padding: 10px 18px;

  &:hover {
    background-color: hsl(235, 69%, 65%);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Button;
