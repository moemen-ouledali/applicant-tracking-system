import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from '../../assets/bootstrap LP/css/CardComponent.module.css'; // Ensure the path is correct
import dev from "../../assets/bootstrap LP/assets/development.png"; // Verify image paths
import uiux from "../../assets/bootstrap LP/assets/uiux.png";
import mang from "../../assets/bootstrap LP/assets/management.png";

const CardComponent = () => {
  const cards = [
    { title: "Web & Mobile Development", imgSrc: dev, category: "Web & Mobile Development" },
    { title: "Business Intelligence", imgSrc: uiux, category: "Business Intelligence" },
    { title: "Digital Marketing & Design", imgSrc: mang, category: "Digital Marketing & Design" },
  ];

  return (
    <div className={styles.cardsContainer}>
      {cards.map((card, index) => (
        <Link to={`/jobs/${encodeURIComponent(card.category)}`} key={index} className={styles.cardLink}>
          <div className={styles.card}>
            <img src={card.imgSrc} alt={card.title} className={styles.cardImage} />
            <figcaption className={styles.cardTitle}>{card.title}</figcaption>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardComponent;
