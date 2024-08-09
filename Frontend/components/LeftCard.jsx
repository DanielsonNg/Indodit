import styles from '../src/css/rootlayout.module.css'


export default function LeftCard(props) {
    return (
        <div className={styles.leftcard}>
            {props.icon}&#160;&#160;&#160;{props.name}
        </div>
    )
}