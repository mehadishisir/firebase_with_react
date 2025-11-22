import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("clicked");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Log in</h2>
      <button onClick={handleGoogleLogin}>sign in with google</button>
    </div>
  );
};

export default Login;
