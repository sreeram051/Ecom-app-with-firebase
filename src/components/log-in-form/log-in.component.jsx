import { useState, useContext } from "react";
import FormInput from "../form-input/form.input.component";
import "./log-in.styles.scss";
import { UserContext } from "../../contexts/user.context";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const { setCurrentUser } = useContext(UserContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      console.log(user);
      clearFormFields();
    } catch (error) {
      console.log("Error signing in:", error); // Log the entire error object
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Log In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">sign in</Button>
          <Button type="button" buttonType={"google"} onClick={logGoogleUser}>
            google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
