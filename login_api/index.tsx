import { useState } from "react";
interface props {
  propsOnSubmit: (data: { propsEmail: string; propsPassword: string }) => void;
}

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  function validate(type: string) {
    if (type === "email") {
      if (!email.includes("@") || !email.includes(".")) {
        setEmailError("Invalid Email");
      } else {
        setEmailError("");
      }
    }
    if (password.length < 7) {
      setPasswordError("Password is too short");
    } else {
      setPasswordError("");
    }
  }

  function formSubmit(e: React.FormEvent) {
    if (password.length < 7) e.preventDefault();
    onSubmit.propsOnSubmit({ propsEmail: email, propsPassword: password });
  }

  return (
    <>
      <form onSubmit={formSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validate("email")}
        />
        <br />
        {emailError}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validate("password")}
        />
        <br />
        {passwordError}
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default SignupForm;
