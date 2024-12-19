import { useState } from "react";

export default function Login() {
  const [email, setPass] = useState("");
  const [password, setUser] = useState("");
  const handleSum = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };
    // console.log(data);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form data-testid="auth_form" onSubmit={(e) => handleSum(e)}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          onChange={(e) => setPass(e.target.value)}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
