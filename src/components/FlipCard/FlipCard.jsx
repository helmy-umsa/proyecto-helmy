import PropTypes from 'prop-types';
import './FlipCard.css';


const FlipCard = ({ title, imgFront, imgback, href }) => {
    return (
        <div className="flip-card">
            <div className="face front">
                <img src={imgFront} alt=""></img>
                <h5>{title}</h5>
            </div>
            <div className="face back">
                <img src={imgback} alt=""></img>
                <a href={href} target="_blank">
                    <h5><i className='bi-music-note-list me-2'></i> Escuchar Album</h5>
                </a>
            </div>
        </div>
    )
}

FlipCard.propTypes = {
    title: PropTypes.string,
    imgFront: PropTypes.string,
    imgback: PropTypes.string,
    href: PropTypes.string
}

export default FlipCard