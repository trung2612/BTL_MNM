import style from "./HalfCard.module.css";

const HalfCard = (props) => {
    return <div className={style.halfCard}>{props.children}</div>
}

export default HalfCard;