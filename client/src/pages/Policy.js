import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy - SwiftMart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-light p-2 text-black text-center">PRIVACY POLICY</h1>
          <p>
            At SwiftMart, we take your privacy seriously. Our Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform. Your trust is important to us, and we are committed to safeguarding your data.
          </p>
          <p>
            Please review our full <a href="/privacy-policy">Privacy Policy</a> to understand how we handle your information, what choices you have, and how to contact us for any privacy-related concerns.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
