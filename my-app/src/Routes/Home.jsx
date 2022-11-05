import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - GitHub API App</title>
        <meta
          name="description"
          content="This is the home page of the GitHub API Fetch Web Application"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        className="home"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDcucg4GQL9A7qOx4Nl5h1Wq-j1m4w9AVcw&usqp=CAU"
          data-aos="fade-right"
          data-aos-delay="100"
          alt="github cartoon"
        />
        <div className="home-message" data-aos="fade-down" data-aos-delay="200">
          <h2>HI 👋</h2>
          <br></br>
          <p>
            My name is Irefin David O. and you are welcome to my Github
            repositories web application. This app will take you to all
            my Github Portfolio. Kindly Navigate to repos and click on any
            Repository of your choice to see my repository datas. Thank You as you do so😎
          </p>
          <Link to="/repos" className="btn btn-primary">
            Repos
          </Link>
        </div>
      </motion.div>
    </>
  );
}

export default Home;