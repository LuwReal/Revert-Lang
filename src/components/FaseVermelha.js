import styles from './FaseVermelha.module.css'
import BotoesTraduz from './fragmentos/BotoesTraduz'



function FaseVermelha({containerFalaVermelho, botaoAzulFaseVermelho,
    botaoAmareloFaseVermelho, botaoVermelhoFaseVermelho, tradutorVermelho,
    proximaFaseVermelha
}){


    return(
        <div className={styles.containerFaseVermelho}>
            {containerFalaVermelho}
            <img className={styles.personagemVermelho} src='./img/personagemFaseVermelha.png' alt='Personagem da Fase Vermelha'/>
            <img src="" alt=''/>
            <p></p>
            {tradutorVermelho}
            {proximaFaseVermelha}
           <BotoesTraduz botaoAzul={botaoAzulFaseVermelho} 
            botaoVermelho={botaoVermelhoFaseVermelho} 
            botaoAmarelo={botaoAmareloFaseVermelho} />
        </div>
    )
}
export default FaseVermelha