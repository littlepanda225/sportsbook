import React from "react";
import SubscribeForm from "../../components/Footer/SubscribeForm";
import SocialBar from "../../components/Footer/SocialBar";

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-midenite-blue text-gray-300">
      <div className="mx-6 py-10 text-center">
        <div className="grid grid-1 grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              About Company
            </h6>
            <p className="mb-4">
              <a href="/about" className="text-white hover:text-blue-500">
                About Us
              </a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/advertising">Advertising</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/contact">Contact</a>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Legal
            </h6>
            <p className="mb-4 hover:text-blue-500">
              <a href="/cookie">Cookie Policy</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/terms">Terms & Conditions</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/privacy">Privacy Policy</a>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Media
            </h6>
            <p className="mb-4 hover:text-blue-500">
              <a href="/news">News</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/videos">Videos</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/previews">Previews</a>
            </p>
          </div>
          <div>
            <h6 className="uppercase font-semibold mb-4 flex justify-center">
              Download App
            </h6>
            <p className="mb-4 hover:text-blue-500">
              <a href="/ios">IOS</a>
            </p>
            <p className="mb-4 hover:text-blue-500">
              <a href="/android">Android</a>
            </p>
          </div>
        </div>
      </div>
      <SocialBar></SocialBar>
      <div className="text-center p-6 bg-black">
        <span>© 2022 Copyright: </span>
        <a className="font-semibold" href="https://tailwind-elements.com/">
          MoneyLineSportsBook
        </a>
      </div>
      <SubscribeForm></SubscribeForm>
    </footer>
  );
};

export default Footer;
