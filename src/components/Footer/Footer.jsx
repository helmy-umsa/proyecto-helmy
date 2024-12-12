import './Footer.css';

import logo_white from '../../assets/images/kiss-logo-white.png';

// Esta función solo se ejecutará después de una interacción del usuario
function initAudio() {
    var audio = document.getElementById('myAudio');
    audio.play().catch(error => {
        console.log('No se pudo reproducir el audio', error);
    });

    // Eliminar el evento después de usarlo
    document.removeEventListener('click', initAudio);
}

// Agregar evento de escucha para la primera interacción
document.addEventListener('click', initAudio);

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer__logo">
                        <img src={logo_white} alt="" className="footer__logo-img"></img>
                    </div>
                    <div className="footer__social">
                        <div>
                            <h3 className="footer__title">Social</h3>
                            <div className="footer__social-icons">
                                <a href='https://www.facebook.com/kissarmybolivia/' target='_blank'>
                                    <i className="bi-facebook footer__social-icon"></i>
                                </a>
                                <a href='https://x.com/KISSARMYBOLIVIA' target='_blank'>
                                    <i className="bi-twitter-x footer__social-icon"></i>
                                </a>
                                <a href='https://www.instagram.com/kissarmybolivia/' target='_blank'>
                                    <i className="bi-instagram footer__social-icon"></i>
                                    </a>
                                <a href='https://www.youtube.com/channel/UCyOw2FDjfQOFQH7paKxNVvA' target='_blank'>
                                    <i className="bi-youtube footer__social-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__made-by">
                Made with <span className="bi-heart-fill heart-icon"></span> by Helmuth Paz Vargas. &lt;HeLmY /&gt; &copy; 2024
            </div>
        </footer>
    );
}
