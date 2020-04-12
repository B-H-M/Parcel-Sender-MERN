import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicator" data-slide-to="0" className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to="1" />
                <li data-target="#carouselExampleIndicator" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="images/deliveryBanner5.png" alt="First Slide" />
                    <div className="carousel-caption">
                        <h1 className="font-weight-bold text-info ml-5" >
                            Delivery Can Never Be This Easier...
                        </h1>
                        <p>
                            <Link to="/Register" className="btn btn-primary border-0 p-2" >
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/deliveryBanner4.png" alt="Second slide" />
                    <div className="carousel-caption">
                        <h1 className="font-weight-bold text-info ml-5">
                            Delivery Can Never Be This Easier...
                        </h1>
                        <p>
                            <Link to="/register" className="btn btn-primary border-0 p-2">
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/deliveryBanner6.png" alt="Third Slide" />
                    <div className="carousel-caption">
                        <h1 className="font-weight-bold text-info">
                            Delivery Can Never Be This Easier...
                        </h1>
                        <p>
                            <Link to="/register" className="btn btn-primary border-0 p-2">
                                Get Started
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Home;



