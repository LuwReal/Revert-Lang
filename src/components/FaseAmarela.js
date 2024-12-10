import styles from './faseamarela.module.css'
import BotoesTraduz from './fragmentos/BotoesTraduz'

function FaseAmarela({containerFalaAmarelo, botaoAzulFaseAmarelo,
    botaoAmareloFaseAmarelo, botaoVermelhoFaseAmarelo, tradutorAmarelo,
    proximaFaseAmarelo
}){


    return(
        <div className={styles.containerFaseAmarelo}>
            {containerFalaAmarelo}
            <img className={styles.personagemAmarelo} src='./img/personagemFaseAmarela.png' alt='Personagem da Fase Amarela'/>
            <img src="" alt=''/>
            <p></p>
            {tradutorAmarelo}
            {proximaFaseAmarelo}
           <BotoesTraduz botaoAzul={botaoAzulFaseAmarelo} 
            botaoVermelho={botaoVermelhoFaseAmarelo} 
            botaoAmarelo={botaoAmareloFaseAmarelo} />
        </div>
    )
}

export default FaseAmarela