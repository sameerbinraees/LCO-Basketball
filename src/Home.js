import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from './assets/img1(cropped).png'
import img2 from './assets/img2(cropped).png'
import img3 from './assets/img3(cropped).png'
import img4 from './assets/img4(cropped).png'

function Home() {
    return (
        <div style={{ backgroundColor: "#dfdddd" }}>
            <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={img3} alt="image1" />
                    <p className="legend">Play with pride!</p>
                </div>
                <div>
                    <img src={img1} alt="image2" />
                    <p className="legend">Wear with proud!</p>
                </div>
                <div>
                    <img src={img2} alt="image3" />
                    <p className="legend">More than a team, a family!</p>
                </div>
                <div>
                    <img src={img4} alt="image4" />
                    <p className="legend">Practice like you are in a match, Play like no one's watching you!</p>
                </div>

            </Carousel>
        </div>
    )
}
export default Home;