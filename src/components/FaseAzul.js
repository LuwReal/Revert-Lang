import styles from './faseazul.module.css'
import BotoesTraduz from './fragmentos/BotoesTraduz'
function FaseAzul({containerFalaAzul, botaoAzulFaseAzul,
    botaoAmareloFaseAzul, botaoVermelhoFaseAzul, tradutorAzul,
    proximaFaseVermelha
}){


    return(
        <div className={styles.containerFaseAzul}>
            {containerFalaAzul}
            <img className={styles.personagemAzul} src='./img/personagemFaseAzul.png' alt='Personagem da Fase Azul'/>
            <img src="" alt=''/>
            <p></p>
            {tradutorAzul}
            {proximaFaseVermelha}
           <BotoesTraduz botaoAzul={botaoAzulFaseAzul} 
            botaoVermelho={botaoVermelhoFaseAzul} 
            botaoAmarelo={botaoAmareloFaseAzul} />
        </div>
    )
}

export default FaseAzul



/*<form onSubmit={teste58}>
                <input type='Text' value={contador} onChange={(e) => setContador(e.target.value)}></input>
                <input type='submit' value='Enviar'></input>
            </form>
            
            let teste25 = 'oi'
    let teste47 = 10
    let [contador, setContador] = useState(0)
    function teste58(event){
        setContador(9)
        event.preventDefault();
    }
    if(contador === 'eu quero sabe se você saber'){
        teste25 = 'você acertou'
    }else{
        teste47 = 5
    }

            */