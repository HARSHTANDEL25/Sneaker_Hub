import React from "react";

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer_container {
            padding: 20px;
            border-top: 2px solid #ccc;
            background-color: #f9f9f9;
            margin-left:81px;
          }

          .footer__content__heading {
            color: black;
            font-size: 27px;
            margin-bottom: 15px; 
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .col-lg-3 {
            flex: 0 0 calc(25% - 20px);
            max-width: calc(25% - 20px);
            margin-bottom: 20px;
          }

          .footer__content {
            padding: 10px;
          }

          .footer__content__list {
            list-style: none;
            padding: 0;
          }

          .footer__content__list li {
            margin-bottom: 10px;
          }

          .footer__content__list li a {
            color: #333;
            text-decoration: none;
          }

          .footer__content__list li a:hover {
            color: #000;
          }

          .footer__content__social {
            list-style: none;
            padding: 0;
            display: flex;
            gap: 20px;
          }

          .footer__content__social li {
            margin-right: 10px;
          }

          .footer__content__social li:last-child {
            margin-right: 0;
          }

          .footer__content__social li a {
            color: #333;
            text-decoration: none;
          }

          .footer__content__social li a:hover {
            color: #000;
          }

          @media screen and (max-width: 992px) {
            .col-lg-3 {
              flex: 0 0 calc(50% - 20px);
              max-width: calc(50% - 20px);
            }
          }

          @media screen and (max-width: 768px) {
            .col-lg-3 {
              flex: 0 0 calc(100% - 20px);
              max-width: calc(100% - 20px);
            }
          }
        `}
      </style>
      <div className="footer_container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__content">
              <h3 className="footer__content__heading">Contact Us</h3>
              <ul className="footer__content__list">
                <li>
                  <a href="tel:0413973275">
                    <i className="fa fa-phone"></i> +91 1234567890
                  </a>
                </li>
                <li>
                  <a href="mailto:solsole123@gmail.com">
                    <i className="fa fa-envelope"></i> sneakerhub23@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker"></i> Anand,Gujarat
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__content">
              <h3 className="footer__content__heading">Help & Information</h3>
              <ul className="footer__content__list">
                <li>
                  <a href="#">Pagination</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="#">Term of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__content">
              <h3 className="footer__content__heading">About Us</h3>
              <ul className="footer__content__list">
                <li>
                  <a href="#">Address center</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Receivers & Amplifiers</a>
                </li>
                <li>
                  <a href="#">Crafts and More</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__content">
              <h3 className="footer__content__heading">Follow Us</h3>
              <ul className="footer__content__social">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
