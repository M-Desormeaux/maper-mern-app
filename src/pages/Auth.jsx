// maper.com/auth

import { useState } from "react";
import { Input } from "../components/Input/Input";
import { Typography } from "../components/Typography/Typography";

export const Auth = () => {
  const [newAccount, setNewAccount] = useState(false);

  const title = newAccount ? "Sign Up" : "Login";
  const switchButton = newAccount ? "Login" : "Sign Up";

  const switchUseCaseHandler = (event) => {
    event.preventDefault();

    setNewAccount((newAccount) => !newAccount);
  };

  return (
    <form>
      <Typography type="h2">{title}</Typography>
      <Input key="textbox" type="text" />
      <Input key="passwordbox" type="password" />
      <button onClick={switchUseCaseHandler}>{switchButton}</button>
    </form>
  );
};
