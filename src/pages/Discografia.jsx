import FlipCard from "../components/FlipCard/FlipCard";
import alive_front from "../assets/images/alive-front.jpg";
import alive_back from "../assets/images/alive-back.jpg";
import crazy_nights_front from "../assets/images/crazy-nights-front.jpg";
import crazy_nights_back from "../assets/images/crazy-nights-back.jpg";
import love_gun_front from "../assets/images/love-gun-front.jpg";
import love_gun_back from "../assets/images/love-gun-back.jpg";
import unmasked_front from "../assets/images/unmasked-front.jpg";
import unmasked_back from "../assets/images/unmasked-back.jpg";
import psycho_circus_front from "../assets/images/psycho-circus-front.jpg";
import psycho_circus_back from "../assets/images/psycho-circus-back.jpg";
import sonic_boom_front from "../assets/images/sonic-boom-front.jpg";
import sonic_boom_back from "../assets/images/sonic-boom-back.jpg";

export default function Discografia() {
    return (
        <div className="container my-5">
            <h1 className="text-center">Discografía</h1>
            <hr />
            <div className="row g-5">

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Alive!'}
                    imgFront={alive_front}
                    imgback={alive_back}
                    href={'https://www.youtube.com/playlist?list=OLAK5uy_k-6wOcD3tau2Li1MtcuCJO3a_sKvZfHy0'}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Crazy Nights'}
                    imgFront={crazy_nights_front}
                    imgback={crazy_nights_back}
                    href={'https://www.youtube.com/playlist?list=OLAK5uy_lu1DyKDDrcpfYh16a54KulcEfHPDYjyKQ'}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Love Gun'}
                    imgFront={love_gun_front}
                    imgback={love_gun_back}
                    href={'https://www.youtube.com/playlist?list=OLAK5uy_maCuninaOyavBAc6xeaUcT6IaJC5MfCUI'}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Unmasked'}
                    imgFront={unmasked_front}
                    imgback={unmasked_back}
                    href={'https://youtube.com/playlist?list=OLAK5uy_kGNea0cae7YLNxTZYgXQ_5FPLkfAa63tQ'}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Psycho Circus'}
                    imgFront={psycho_circus_front}
                    imgback={psycho_circus_back}
                    href={'https://www.youtube.com/playlist?list=OLAK5uy_nSFkyMihP-7VKMCmTOouxL13BQs-f6ggY'}
                    />
                </div>

                <div className="col-12 col-md-4">
                    <FlipCard
                    title={'Sonic Boom'}
                    imgFront={sonic_boom_front}
                    imgback={sonic_boom_back}
                    href={'https://www.youtube.com/playlist?list=OLAK5uy_mO8H8QnjzEInXog5EWVEymZNSfVPy4f5g'}
                    />
                </div>

            </div>
        </div>
    )
}