import './Home.css';
import rueda from "../../assets/images/kiss-faces-tra.png";
import demon from "../../assets/images/demon.png";
import starchild from "../../assets/images/starchild.png";
import catman from "../../assets/images/catman.png";
import spaceman from "../../assets/images/spaceman.png";
import intro_audio from "../../assets/audio/you-wanted-the-best.mp3";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <div className="main-cover">
                <img src={rueda} alt="" className="img-cover"></img>
            </div>

            <section className="members-container">
                <div className='container'>
                    <h2 className="main-title">The hottest Band in the World!</h2>
                    <div className="members-info">
                        <div className="member-container">
                            <Link to={'gene#'}>
                                <img src={demon} alt="" className="member-icon"></img>
                                <h3 className="member-name">Gene Simmons</h3>
                            </Link>
                        </div>
                        <div className="member-container">
                            <Link to={'paul#'}>
                                <img src={starchild} alt="" className="member-icon"></img>
                                <h3 className="member-name">Paul Stanley</h3>
                            </Link>
                        </div>
                        <div className="member-container">
                            <Link to={'peter#'}>
                                <img src={catman} alt="" className="member-icon"></img>
                                <h3 className="member-name">Peter Criss</h3>
                            </Link>
                        </div>
                        <div className="member-container">
                            <Link to={'ace#'}>
                                <img src={spaceman} alt="" className="member-icon"></img>
                                <h3 className="member-name">Ace Frehley</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <audio id="myAudio">
                <source src={intro_audio} type="audio/mp3"></source>
                Tu navegador no soporta el formato de audio.
            </audio>
        </>
    )
}