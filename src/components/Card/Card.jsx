import styled from "styled-components";
import { Link } from "../Link/Link";

const CardStyle = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem;
  min-width: 300px;
  max-width: 300px;
`;

export const Card = (props) => {
  return (
    <Link href={`/${props.userID}/places`}>
      <CardStyle>
        <h1 style={{ display: "inline-block" }}>{props.name}</h1>
        <p
          style={{
            display: "inline-block",
            width: "50px",
            textAlign: "center",
          }}
        >
          {props.age}
        </p>
        <p>{props.title}</p>
        <p>
          <b>Places: {props.places}</b>
        </p>
      </CardStyle>
    </Link>
  );
};
