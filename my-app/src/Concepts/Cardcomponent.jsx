import styles from "./Card.module.css";
import Product from '../product.jpg'   // ✅ correct path

function Card({ title, description, image, buttonText, onButtonClick }) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} className={styles.image} />}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {buttonText && (
          <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

function Cardcomponent() {
  return (
    <div>
      <Card
        title="Product Name"
        description="This is a great product"
        image={Product}              // ✅ use imported variable!
        buttonText="Buy Now"
        onButtonClick={() => alert("Added to cart!")}
      />
    </div>
  );
}

export default Cardcomponent;