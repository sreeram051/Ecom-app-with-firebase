import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const signIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign-in</h1>
      <button onClick={logGoogleUser}>
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default signIn;
