import Carousel from "../components/Carousel/Carousel";
import img_kiss_first_logo from "../assets/images/kiss-first-logo.png";
import img_kiss_first_show from "../assets/images/kiss-first-show.jpg";
import img_kiss_makeups from "../assets/images/kiss-makeups.jpg";

export default function Kisstory() {
    return (
        <div className="container my-5">
            <h1 className="text-center">Kisstory</h1>
            <hr />
            <div>
                <Carousel />
            </div>
            <hr />

            <h2 className="text-center my-5">You Wanted The Best... You Got The Best!</h2>

            <section className="text-center d-flex justify-content-center align-items-center gap-5">
                <div className="flex-item p-4">
                    <img src={img_kiss_first_show} alt="" className="first-logo rounded-circle" />
                </div>
                <div className="flex-item section-description">
                    <h2 className="my-4">Banda</h2>
                    <p className="text-start">
                        El 30 de enero de 1973 menos de 10 personas presenciaron las primeras e históricas actuaciones en vivo de Kiss en el Popcorn Club (que poco después sería rebautizado como The Coventry) en Queens, Nueva York, un lugar con capacidad para 700 personas. Claro, ¿quién iba siquiera a imaginar que esa noche nacería una de las bandas más particulares y exitosas de la leyenda del rock? Según el bajista Gene Simmons, el grupo recibió U$ 50 por realizar dos shows en aquella fría -pero histórica- noche invernal.
                    </p>
                    <p className="text-start">
                        Toda historia tiene un principio, y la de Kiss arranca en el Popcorn. Antes de este show, hacía muy poco que Simmons y su socio Paul Stanley habían terminado con su grupo anterior, Wicked Lester, reclutando luego al baterista Peter Criss y al guitarrista Ace Frehley para su nuevo proyecto. Su objetivo, como Simmons ha explicado, recordado y detallado a lo largo de los años, era “armar la banda que nunca habíamos visto antes en un escenario”.
                    </p>
                </div>
            </section>

            <section className="text-center d-flex justify-content-center align-items-center mt-5 gap-5">
                <div className="flex-item section-description">
                    <h2 className="my-4">Logo</h2>
                    <p className="text-start">
                        El logo de KISS es uno de los más escandalosos y reconocibles. Apareció en el otoño de 1973 y se representó por primera vez en un cartel de concierto en Nueva York. El guitarrista Ace Frehley, quien esbozó el emblema en varios anuncios con un marcador, es considerado el creador de la idea. Luego, el dibujo fue refinado por el vocalista Paul Stanley, quien tenía una educación artística.
                    </p>
                    <p className="text-start">
                        Frehley dijo que creó el logotipo inmediatamente después de que Kiss decidiera cambiar su nombre Wicked Lester. “La semana que decidimos llamarnos Kiss, me fui a casa e hice un botón,” recordó. “He creado un logotipo en él, y la única diferencia entre ese botón y el logotipo como lo es hoy es que tenía un punto en la ‘i’ como un diamante. A pesar de lo que dice la gente, no estaba pensando en las SS [Nazi] cuando lo diseñé. Estaba pensando más en rayos.
                    </p>
                </div>
                <div className="flex-item p-4">
                    <img src={img_kiss_first_logo} alt="" className="first-logo" />
                </div>
            </section>

            <section className="text-center d-flex justify-content-center align-items-center mt-5 gap-5">
                <div className="flex-item p-4">
                    <img src={img_kiss_makeups} alt="" className="first-logo rounded-circle" />
                </div>
                <div className="flex-item section-description">
                    <h2 className="my-4">Maquillajes</h2>
                    <p className="text-start">
                        El maquillaje de cada miembro tiene un significado, el de Gene Simmons (Demon) es una representación de su fascinación por el cine de terror, por lo que trató de recrear las alas de un murciélago en el área de los ojos.
                    </p>
                    <p className="text-start">
                        Paul Stanley (Starchild) destacó por su alegre personalidad que quedó plasmada en su cara con una estrella en el ojo derecho y los labios en color rojo.
                    </p>
                    <p className="text-start">
                        Ace Frehley (Spaceman) es un aficionado a los ovnis y la astronomía, por lo que trató de interpretarlo con labios negros, así como lo que parecieran ser estrellas en los ojos de color plateado; luego de la salida de Frehley entró Tommy Thayer y adoptó este maquillaje.
                    </p>
                    <p className="text-start">
                        Peter Criss (Catman) relata que vivía en Brooklyn, Estados Unidos, donde constantemente lograba meterse en problemas, sintiéndose identificado con los gatos y sus “siete vidas”, por lo que su maquillaje está compuesto de parpados verdes con el contorno negro, dos rayas negras en cada costado de los labios rojos y una nariz plateada.
                    </p>
                </div>
            </section>
        </div>
    )
}