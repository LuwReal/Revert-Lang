import styles from './botaogameover.module.css'


function BotaoGameOver({VoltaMenu}){
    return(
        <div className={styles.container}>
            {VoltaMenu}
        </div>
    )
}

export default BotaoGameOver