import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={'Contact - Ecommerce App'}>
      <div class="row contactus">
        <div class="col-md-6">
          <img
            src="images/contactus.jpeg "
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div class="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center mb-5">CONTACT US</h1>
          <p class="text-justify fs-4 ">
            any query and info about product, feel free to call anytime 27x7
          </p>
          <p class="mt-4 fs-4">
            <BiMailSend /> : www.help@ecommerce.com
          </p>
          <p class="mt-4 fs-4">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p class="mt-4 fs-4">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
