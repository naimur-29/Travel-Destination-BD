import { UseStateContext } from "../Context/StateContext";
import { UseAuth } from "../Context/AuthContext";

const Home = () => {
  const { test } = UseStateContext();
  const { user } = UseAuth();

  console.log(test);
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
