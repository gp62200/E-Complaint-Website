import React from "react";
import Imageslider from "./Imageslider";
import Footer from "./Footer";
import se from "./se.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    se();
  }, []);

  return (
    <div>
      {/* <h1>Welcome to *****e-Complaint*****</h1> */}

      <div>
        <Imageslider />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
