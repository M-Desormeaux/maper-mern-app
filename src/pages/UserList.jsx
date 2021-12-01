// maper.com/

import styled from "styled-components";
import { Card } from "../components/Card/Card";

const userList = [
  { userID: 12345613, name: "Tim", age: 20, title: "Developer", places: 5 },
  { userID: 73452456, name: "Tom", age: 23, title: "Accountant", places: 12 },
  {
    userID: 84624663,
    name: "Tucker",
    age: 30,
    title: "Restaurant Owner",
    places: 4,
  },
  {
    userID: 23475624,
    name: "Jon",
    age: 20,
    title: "Venture Capitalist",
    places: 6,
  },
  { userID: 46245345, name: "Joey", age: 23, title: "Bartender", places: 89 },
  { userID: 75678457, name: "Madi", age: 30, title: "Banker", places: 45 },
  {
    userID: 31892312,
    name: "Michael",
    age: 20,
    title: "Developer",
    places: 15,
  },
];

const FlexGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserList = () => {
  return (
    <FlexGrid>
      {userList.map((user) => (
        <Card
          userID={user.userID}
          key={user.userID}
          name={user.name}
          age={user.age}
          title={user.title}
          places={user.places}
        />
      ))}
    </FlexGrid>
  );
};
