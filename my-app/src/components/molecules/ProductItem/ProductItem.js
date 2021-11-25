import style from "./ProductItem.module.css";

const ProductItem = (props) => {
    return (
        <div className={style.productItem}>
            <img src={props.src} alt=""/>
            <div className={style.downContent}>
                <h4>{props.title}</h4>
                <h6>{props.price}</h6>
                <p>{props.content}</p>
            </div>
            <ul className={style.start}>
                <li>*</li>
                <li>*</li>
                <li>*</li>
            </ul>
            <span className={style.review}>Review(24)</span>
        </div>
    )
    
};

export default ProductItem;