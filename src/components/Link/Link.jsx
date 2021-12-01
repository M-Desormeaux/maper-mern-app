import styled from "styled-components";

const LinkStyle = styled.a`
  &:visited,
  &:active,
  &:focus,
  &:link,
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export const Link = (props) => {
  return <LinkStyle href={props.href}>{props.children}</LinkStyle>;
};
