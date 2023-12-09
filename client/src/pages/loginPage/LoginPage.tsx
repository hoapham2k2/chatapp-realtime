import React from "react";
import { useHref, useNavigate } from "react-router-dom";
type Props = {};

const MyApp_LoginPage = (props: Props) => {
  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) {
      setName(name);
      window.location.href = "/";
    }
  }, []);

  const handleOnClick = () => {
    // save name in local storage
    localStorage.setItem("name", name);
    // redirect to home page
    window.location.href = "/";
  };
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleOnClick}>Login</button>
    </>
  );
};

export default MyApp_LoginPage;
