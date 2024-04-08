import { UseStateContext } from "../Context/StateContext";
import { UseAuth } from "../Context/AuthContext";

import homeBgVideo from "../assets/home-bg.mp4";

const Home = () => {
  const { test } = UseStateContext();
  const { user } = UseAuth();

  console.log(test);
  console.log(user);

  return (
    <div>
      <h1>Home</h1>
      {/*
      <video autoPlay loop muted>
        <source src={homeBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}
    </div>
  );
};

export default Home;
