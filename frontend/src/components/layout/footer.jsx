import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footerbg text-dark">
            <footer className="container py-5">
                <div className="row">
                    <div className="col-12 col-md">
                        <Link to="/" className="navbar-brand ml-5">
                            <img 
                                src="images/sendITLogo.png" 
                                className="img-fluid" 
                                width="100" height="100" 
                                alt="footer Logo" />
                        </Link>
                        {/* <img src="images/sendITLogo.png" className="mb-3 mr-5" width="110" height="40" alt="" /> */}
                        <small className="d-block text-dark ml-5">Copyright &copy; 2020. <br></br> Developed by BHM! </small>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About Us</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-dark" to="#">
                                    LetSendIT is a parcel/courier service that delivers orders
                                    perfectly with utmost speed
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Office Address</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-dark" to="#">
                                    Ogba, Lagos state, Nigeria
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Working Hours</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-dark" to="#">
                                    Weekdays: 8am - 6pm
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="#">
                                    Weekends: 10am - 4pm
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>More Info</h5>
                        <ul className="list-unstyled text-small">
                            <li>
                                <Link className="text-dark" to="#">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="#">
                                    Location
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="#">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-dark" to="#">
                                    Tearms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>            
        </div>
    );
};

export default Footer;
