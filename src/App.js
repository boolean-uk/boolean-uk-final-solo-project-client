import { useEffect, useState } from "react";
import "./App.css";
import SignUp from "../src/components/SignUpForm";
import SignIn from "../src/components/SignInForm";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticatedUser(token);
    }
  }, []);

  return (
    <>
      <SignUp setAuthenticatedUser={setAuthenticatedUser} />
      {/* {authenticatedUser && <div>Hello!</div>} */}
      <SignIn setAuthenticatedUser={setAuthenticatedUser} />
    </>
  );
}

export default App;
