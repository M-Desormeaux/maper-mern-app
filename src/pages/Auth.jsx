// maper.com/auth

import { useState } from "react";
import { Container } from "../components/Container/Container";
import { Input } from "../components/Input/Input";
import { Typography } from "../components/Typography/Typography";

export const Auth = () => {
  const [newAccount, setNewAccount] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const title = newAccount ? "Sign Up" : "Login";
  const switchButton = newAccount ? "Login" : "Sign Up";

  const switchUseCaseHandler = (event) => {
    event.preventDefault();

    setNewAccount((newAccount) => !newAccount);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const updateUsernameHandler = (data) => {
    setFormState({ ...formState, username: data });
  };

  const updatePasswordHandler = (data) => {
    setFormState({ ...formState, password: data });
  };

  return (
    <Container>
      <form>
        <Typography type="h2">{title}</Typography>
        <div>
          <Input
            label="Username:"
            key="username"
            type="text"
            output={updateUsernameHandler}
          />
        </div>
        <div>
          <Input
            label="Password:"
            key="password"
            type="password"
            output={updatePasswordHandler}
          />
        </div>
        <button onClick={submitHandler}>{title}</button>
      </form>
      <button onClick={switchUseCaseHandler}>{switchButton}</button>

      <form action=""></form>
    </Container>
  );
};
