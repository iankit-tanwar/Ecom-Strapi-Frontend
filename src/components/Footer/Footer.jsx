import "./Footer.scss";

import { FaEnvelope, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

import Payment from '../../assets/payments.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s </div>
                </div>
                <div className="col">
                    <div className="title">Content</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Najafgarh , New Delhi , Pincode 110043
                        </div>

                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 0471 272 0261
                        </div>

                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                           Email: store@tstore.com
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="title">Category</div>
                    <span className="text">Headphones </span>
                    <span className="text">Smart Watches </span>
                    <span className="text">Bluetooth Speakers </span>
                    <span className="text">Wireless Earbuds </span>
                    <span className="text">Home Theatre </span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home </span>
                    <span className="text">About </span>
                    <span className="text">Privacy Policy </span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        TSTORE. 2024 CREATED BY ANKIT TANWAR PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} alt="payment_img" />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
