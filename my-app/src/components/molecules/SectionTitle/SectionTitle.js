import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
    return <div className={styles.sectionTitle}>
        <div className={styles.heading}>
            <h2>{props.title}</h2>
            <span>{props.right}</span>
        </div>
    </div>
};

export default SectionTitle;