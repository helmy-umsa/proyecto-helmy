import ace_solo from "../assets/images/ace-solo.jpg";
import CardProfile from "../components/ProfileCard/ProfileCard";

export default function Ace() {
    return (

        <CardProfile
            title={'Ace Frehley'}
            image={ace_solo}
            description={'Paul Daniel Frehley, más conocido como Ace Frehley (Nueva York, Estados Unidos, 27 de abril de 1951), es un músico estadounidense célebre por haber sido el guitarrista y uno de los fundadores del grupo Kiss. Junto a Gene Simmons, Paul Stanley y Peter Criss, Frehley formó la mencionada banda en 1973 y asumió en ella la personalidad de «Space Ace» o «Spaceman», debido a su afición por la astronomía y los ovnis. Con el álbum Love Gun de 1977, el músico se estrenó como vocalista y al año siguiente publicó su debut homónimo en solitario, puesto a la venta el mismo día que el de sus compañeros de banda. Tras grabar nueve álbumes de estudio con Kiss, el guitarrista abandonó la formación en 1982 para embarcarse en su carrera en solitario y trabajar en el proyecto Frehley&apos;s Comet.'}
            href={'https://es.wikipedia.org/wiki/Ace_Frehley'}
        />
    )
}