import LogInForm from "../../components/log-in-form/log-in.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import "./sign-in.styles.scss";

const signIn = () => {
  return (
    <div className="sign-in">
      <LogInForm />
      <SignUpForm />
    </div>
  );
};

export default signIn;
