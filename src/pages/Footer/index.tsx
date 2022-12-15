import React from "react";
import SubscribeForm from "../../components/Footer/SubscribeForm";
import SocialBar from "../../components/Footer/SocialBar";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-gray-100 text-gray-600">
      <div className="mx-6 py-10 text-center">
        <div className="grid grid-1 grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              About Company
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                About Us
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Advertising
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Contact
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Legal
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Cookie Policy
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Terms & Conditions
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Media
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                News
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Videos
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Previews
              </a>
            </p>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Download App
            </h6>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                IOS
              </a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-gray-600">
                Android
              </a>
            </p>
          </div>
        </div>
      </div>
      <SocialBar></SocialBar>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright: </span>
        <a
          className="text-gray-600 font-semibold"
          href="https://tailwind-elements.com/"
        >
          MoneyLineSportsBook
        </a>
      </div>
      <SubscribeForm></SubscribeForm>
    </footer>
  );
};

export default Footer;
