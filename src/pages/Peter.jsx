import peter_solo from "../assets/images/peter-solo.jpg";
import CardProfile from "../components/ProfileCard/ProfileCard";

export default function Peter() {
    return (

        <CardProfile
            title={'Peter Criss'}
            image={peter_solo}
            description={'George Peter John Criscuola (nacido el 20 de diciembre de 1945), más conocido por su nombre artístico Peter Crisses un músico estadounidense retirado, mejor conocido como cofundador, baterista original y vocalista ocasional de la rock duro banda Beso. Criss estableció el Catman personaje para su personaje de Kiss. En 2014, fue incluido en el Salón de la Fama del Rock and Roll como miembro de Kiss.'}
            href={'https://es.wikipedia.org/wiki/Peter_Criss'}
        />
    )
}