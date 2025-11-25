import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const handleGoogleLogin = () => {
    console.log("clicked");
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    console.log("github clicked");
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out complete");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Please Log in</h2>

      {user ? (
        <button onClick={handleSignOut}>sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleLogin}>Google Login</button>
          <button onClick={handleGithubLogin}>GitHub Login</button>
        </>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
          <img src={user.photoURL} alt=""></img>
        </div>
      )}
    </div>
  );
};

export default Login;
