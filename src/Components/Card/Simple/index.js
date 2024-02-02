import './index.css';

export const Simple = ({ img, title, description, price }) => {


  return (
    
    <div className="product-card">
        <div className="product-image-container">
            <img src={img} alt={title} className="product-image" />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Prix: {price} €</p>

      
    </div>
  );
};