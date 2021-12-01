import styled from "styled-components";

const ContainerStyle = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
`;

export const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>;
};
