import LogInForm from "../../components/log-in-form/log-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const signIn = () => {
  return (
    <div>
      <h1>sign-in</h1>
      <LogInForm />
      <SignUpForm />
    </div>
  );
};

export default signIn;
