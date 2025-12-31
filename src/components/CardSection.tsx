import Image from 'next/image';
import styles from './CardSection.module.css';

const cards = [
    {
        id: 1,
        title: "Cancer Care",
        image: "/images/cancer_care.png",
        description: "SHB-MDH Cancer & Multi-Speciality Charitable Hospital",
        color: "#f97316" // Orange
    },
    {
        id: 2,
        title: "Diagnostic Services",
        image: "/images/diagnostic.png",
        description: "Shri Hanuman Balaji Charitable Diagnostic Centre",
        color: "#0ea5e9" // Blue
    },
    {
        id: 3,
        title: "Wellness Care",
        image: "/images/wellness.png",
        description: "Shri Hanuman Balaji Bhartiya Chikitsa Charitable Trust",
        color: "#f97316" // Orange
    }
];

const CardSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {cards.map((card, index) => (
                    <div key={card.id} className={styles.card}>
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className={styles.cardImage}
                        />
                        <div className={styles.overlay}></div>
                        <div className={styles.content}>
                            <span className={styles.tag} style={index === 1 ? { background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 100%)' } : {}}>{card.title}</span>
                            <p className={styles.description}>{card.description}</p>
                            <button className={styles.button}>Visit Website</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardSection;
