import paul_solo from "../assets/images/paul-solo.jpg";
import CardProfile from "../components/ProfileCard/ProfileCard";

export default function Paul() {
    return (

        <CardProfile
            title={'Paul Stanley'}
            image={paul_solo}
            description={'Stanley Bert Eisen (Queens, Nueva York, 20 de enero de 1952), más conocido como Paul Stanley, es un músico,cantante y pintor estadounidense, reconocido por ser la voz principal, guitarra rítmica y fundador junto a Gene Simmons de la banda de rock Kiss. Ha participado en la composición de la mayoría de los éxitos de la banda y, junto a Simmons, ha liderado a la agrupación durante sus cincuenta años de trayectoria. Su personaje representado en Kiss es The Starchild o El Chico Estrella.'}
            href={'https://es.wikipedia.org/wiki/Paul_Stanley'}
        />
    )
}