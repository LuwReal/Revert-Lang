import styles from './botoestraduz.module.css'

function BotoesTraduz({
    botaoAzul, botaoVermelho, botaoAmarelo
    
    

}){

    return(
        <div className={styles.containerbotoes}>
            <div className={styles.botaoAzul}>{botaoAzul}</div>
            <div className={styles.botaoVermelho}>{botaoVermelho}</div>
            <div className={styles.botaoAmarelo}>{botaoAmarelo}</div>
        </div>
    )
}

export default BotoesTraduz