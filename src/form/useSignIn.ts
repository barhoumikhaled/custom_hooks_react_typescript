import { ChangeEvent, useState } from "react";
import User from "./User";

const useSignIn = () => {
  const [user, setUser] = useState(new User());

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debugger;
    event.persist();
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    console.log(user);
    alert("Login: " + user.login + " Password: " + user.password);

    // call api here
  };
  return [handleInputChange, handleSubmit, user];
};

export default useSignIn;
