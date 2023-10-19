import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Swiftmart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to <b>SwiftMart</b>, your ultimate destination for a seamless online shopping experience! We are proud to be your go-to platform for a wide range of products, competitive prices, and unmatched convenience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
