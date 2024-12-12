import gene_solo from "../assets/images/gene-solo.jpg";
import CardProfile from "../components/ProfileCard/ProfileCard";

export default function Gene() {
    return (

        <CardProfile
            title={'Gene Simmons'}
            image={gene_solo}
            description={'Chaim Witz (hebreo: חיים ויץ, n. Haifa, Israel; 25 de agosto de 1949), conocido como Gene Simmons, es un músico israelí-estadounidense, cantante, compositor, productor de discos, emprendedor, actor, autor y personalidad televisiva de ascendencia judía húngara. También conocido por su personaje teatral, The Demon, es el bajista y colíder de Kiss, la banda de rock que cofundó con el cantante y guitarrista rítmico Paul Stanley a principios de los 70s.'}
            href={'https://es.wikipedia.org/wiki/Gene_Simmons'}
        />
    )
}