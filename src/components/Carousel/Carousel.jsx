import './Carousel.css';
import img_kiss_0 from "../../assets/images/kiss-0.jpg";
import img_kiss_1 from "../../assets/images/kiss-1.jpg";
import img_kiss_2 from "../../assets/images/kiss-2.jpg";
import img_kiss_3 from "../../assets/images/kiss-3.jpg";
import img_kiss_4 from "../../assets/images/kiss-4.jpg";
import img_kiss_5 from "../../assets/images/kiss-5.jpg";
import img_kiss_6 from "../../assets/images/kiss-6.jpg";
import img_kiss_7 from "../../assets/images/kiss-7.jpg";
import img_kiss_8 from "../../assets/images/kiss-8.jpg";
import img_kiss_9 from "../../assets/images/kiss-9.jpg";
import img_kiss_members from "../../assets/images/kiss-all-members.jpg";

const Carousel = () => {
    return (
        <div className="carousel-container">
            <div id="carouselExampleAutoplaying" className ="carousel slide" data-bs-ride="carousel">
                <div className ="carousel-inner">
                    <div className ="carousel-item active">
                        <img src={img_kiss_0} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_1} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_9} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_2} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_3} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_8} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_4} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_7} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_5} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_6} className ="d-block w-100" alt="..."></img>
                    </div>
                    <div className ="carousel-item">
                        <img src={img_kiss_members} className ="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className ="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className ="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className ="visually-hidden">Previous</span>
                </button>
                <button className ="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className ="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className ="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel