import styles from './menu.module.css'
import BotaoGameOver from './fragmentos/BotaoGameOver';
import FaseAzul from './FaseAzul';
import FaseVermelha from './FaseVermelha';
import FaseAmarela from './FaseAmarela';
import React, {useState} from 'react';

function Menu(){
    /*Menu*/
    let [comeceFase1, setComeceFase1] = useState(styles.ComeceFase1StylesNone)
    let [containerInterno, setContainerInterno] = useState(styles.containerInterno)
    function NewGame(){
        if(containerInterno === styles.containerInterno){
            setContainerInterno(styles.containerInternoNone)
        }else{
            setContainerInterno(styles.containerInterno)
        }
        setComeceFase1(styles.ComeceFase1Styles)
    }
     /*botoes*/
     
    let [gamerOverContainer, setGamerOverContainer] = useState(null)
    let GamerOver = () =>{
        setGamerOverContainer(<BotaoGameOver VoltaMenu={<img className={styles.botaoVoltaMenu}onClick={VoltaMenuBotao} src='./img/voltaMenu.png' alt='Volta ao Menu'/>}/>)
        setComeceFase2(styles.ComeceFase2StylesNone)
        setComeceFase1(styles.ComeceFase1StylesNone)
        setComeceFase3(styles.ComeceFase3StylesNone)

    }
    const BotaoGamerOverAzul =  <img onClick={GamerOver} src='./img/tradutorAzul.png' alt='Botão de Traduzir'/>
    const BotaoGamerOverVermelho =  <img onClick={GamerOver} src='./img/tradutorVermelho.png' alt='Botão de Traduzir'/>
    const BotaoGamerOverAmarelo = <img onClick={GamerOver} src='./img/tradutorAmarelo.png' alt='Botão de Traduzir'/>

    

    function VoltaMenuBotao(){
        setContainerInterno(styles.containerInterno)
        setGamerOverContainer(null)
        window.location.reload();
        setTraducaoFase1(null)
        setTraducaoFase2(null)
        setTraducaoFase3(null)
    }
    /*FaseAzul*/
    let [comeceFase2, setComeceFase2] = useState(styles.ComeceFase2StylesNone)
    function ComeceFaseVermelha(){
        setComeceFase2(styles.ComeceFase2Styles)
        setComeceFase1(styles.ComeceFase1StylesNone)
        setTraducaoFase1(null)
    }
    let[FalaAzul, setFalaAzul] = useState('.etnoziroh o odnatnacne e acigól a odnaifased ,ila odasuop e otnev olep odavel odis essevit orrac o es omoc ,laerrus oãsiv amu arE .etnautulf amrofatalp amu erbos avahlirb luza inihgrobmaL amu ,ram o racot aicerap uéc o edno ,odnuforp luza ed onaeco otsav oN')
   
    let InverteFalaAzul = () => {
        setFalaAzul(FalaAzul.split('').reverse().join(''));
    }
    const BotaoAzul =  <img onClick={InverteFalaAzul} src='./img/tradutorAzul.png' alt='Botão de Traduzir'/>
    /*FinalAzul */
    /*Fase vemelha */
    let [comeceFase3, setComeceFase3] = useState(styles.ComeceFase3StylesNone)
    function ComeceFaseAmarelo(){
        setComeceFase2(styles.ComeceFase2StylesNone)
        setComeceFase1(styles.ComeceFase1StylesNone)
        setComeceFase3(styles.ComeceFase3Styles)
        setTraducaoFase2(null)
    }
    let[FalaVermelho, setFalaVermelho] = useState('acinú azeleb aus odnaçlaer ,los od zul a etelfer ohlavro od ohlirb o otnauqne ,ecod emufrep mu malaxe sadaduleva salatép saus ,aviv amahc amu omoc acatsed es ahlemrev asor a ,midraj oa oiem mE')
   
    let InverteFalaVermelho = () => {
        setFalaVermelho(FalaVermelho.split('').reverse().join(''));
    }
    const BotaoVermelho = <img onClick={InverteFalaVermelho} src='./img/tradutorVermelho.png' alt='Botão de Traduzir'/>
    /*Final Vermelho */
    /*Fase Amarela */
    let[final, setFinal] = useState(styles.FinalNone)
    function Final(){
        setComeceFase2(styles.ComeceFase2StylesNone)
        setComeceFase1(styles.ComeceFase1StylesNone)
        setComeceFase3(styles.ComeceFase3StylesNone)
        setTraducaoFase2(null)
        setFinal(styles.Final)
    }
    let[FalaAmarelo, setFalaAmarelo] = useState('.aid mu siam ed mif o odnaicnuna ,evaus rolac mu moc arret a maçarba soiar somitlú sues otnauqne ,odaruod e ajnaral ed uéc o odnignit ,etnematnel ahlugrem olerama los o ,etnoziroh oN')
   
    let InverteFalaAmarelo = () => {
        setFalaAmarelo(FalaAmarelo.split('').reverse().join(''));
    }
    const BotaoAmarelo = <img onClick={InverteFalaAmarelo} src='./img/tradutorAmarelo.png' alt='Botão de Traduzir'/>
    /*Final Amarelo */
    /*Botão Proxima fase */
    let [traducaoFase2, setTraducaoFase2] = useState(null)
    let [traducaoFase1, setTraducaoFase1] = useState(null)
    let [traducaoFase3, setTraducaoFase3] = useState(null)
    let ProximaFase = null
    if(traducaoFase1 === "No vasto oceano de azul profundo, onde o céu parecia tocar o mar, uma Lamborghini azul brilhava sobre uma plataforma flutuante. Era uma visão surreal, como se o carro tivesse sido levado pelo vento e pousado ali, desafiando a lógica e encantando o horizonte."){
        ProximaFase = <img onClick={ComeceFaseVermelha} className={styles.proximaFaseV} src='./img/proximaFaseV.png' alt='Proxima Fase' title='Texto Traduzido Poder Ir Para A Proxima Fase'/>
    }else if(traducaoFase2 === 'Em meio ao jardim, a rosa vermelha se destaca como uma chama viva, suas pétalas aveludadas exalam um perfume doce, enquanto o brilho do orvalho reflete a luz do sol, realçando sua beleza única'){
        ProximaFase = <img onClick={ComeceFaseAmarelo} className={styles.proximaFaseV} src='./img/proximaFaseV.png' alt='Proxima Fase' title='Texto Traduzido Poder Ir Para A Proxima Fase'/>
    }else if(traducaoFase3 === 'No horizonte, o sol amarelo mergulha lentamente, tingindo o céu de laranja e dourado, enquanto seus últimos raios abraçam a terra com um calor suave, anunciando o fim de mais um dia.'){
        ProximaFase = <img onClick={Final} className={styles.proximaFaseV} src='./img/proximaFaseV.png' alt='Proxima Fase' title='Texto Traduzido Poder Ir Para A Proxima Fase'/>
        
    }else{
        ProximaFase = <img className={styles.proximaFaseX} src='./img/proximaFaseX.png' alt='Botão = Você Não Poder Ir para Proxima Fase' title='Traduz o Texto Para Libera a Proxima Fase'/>
    }


    return(
        <div className={styles.containerExterno}>
            <>{gamerOverContainer}</>
            <div className={containerInterno}>
             <button onClick={NewGame} className={styles.tituloMenu}>New Game</button>
            </div>
            <div className={comeceFase1}>
                <FaseAzul 
                    containerFalaAzul={
                    <div>
                        <div className={styles.FalaAzulContainer}>
                            <p className={styles.falaAzul}>{FalaAzul}</p>
                        </div>
                    </div>
                    }
                    proximaFaseVermelha = {ProximaFase}
                    tradutorAzul = {<input type='Text' value={traducaoFase1} onChange={(e) => setTraducaoFase1(e.target.value)}></input>}
                    botaoAzulFaseAzul={BotaoAzul}
                    botaoVermelhoFaseAzul={BotaoGamerOverVermelho}
                    botaoAmareloFaseAzul={BotaoGamerOverAmarelo}
                 />
            </div>
            <div className={comeceFase2}>
                <FaseVermelha 
                    containerFalaVermelho={
                    <div>
                        <div className={styles.FalaVermelhoContainer}>
                            <p className={styles.falaVermelho}>{FalaVermelho}</p>
                        </div>
                    </div>
                    }
                    proximaFaseVermelha = {ProximaFase}
                    tradutorVermelho = {<input type='text' value={traducaoFase2} onChange={(e) => setTraducaoFase2(e.target.value)}></input>}
                    botaoAzulFaseVermelho={BotaoGamerOverAzul}
                    botaoVermelhoFaseVermelho={BotaoVermelho}
                    botaoAmareloFaseVermelho={BotaoGamerOverAmarelo}
                />
            </div>
            <div className={comeceFase3}>
                    <div>
                        <FaseAmarela 
                            containerFalaAmarelo={
                                <div>
                                    <div className={styles.FalaAmareloContainer}>
                                        <p className={styles.falaAmarelo}>{FalaAmarelo}</p>
                                    </div>
                                </div>
                                }
                                proximaFaseAmarelo = {ProximaFase}
                                tradutorAmarelo = {<input type='text' value={traducaoFase3} onChange={(e) => setTraducaoFase3(e.target.value)}></input>}
                                botaoAzulFaseAmarelo={BotaoGamerOverAzul}
                                botaoVermelhoFaseAmarelo={BotaoGamerOverVermelho}
                                botaoAmareloFaseAmarelo={BotaoAmarelo}
                        />
                    </div>
            </div>
            <div className={styles.botoesRaizPai}>
            </div>
            <div className={final}>
                <p>
                Obrigado por jogar <b>Revert Lang!</b> A história do jogo foi uma jornada de tradução e troca de idiomas, com personagens que passaram por várias fases, compartilhando suas histórias e falas em diferentes línguas. Esperamos que você tenha se divertido e desafiado ao traduzir cada palavra e descobrir o que vem a seguir. Se você gostou da experiência, não deixe de explorar todos os detalhes que colocamos neste mundo de palavras!
                </p>
                <p><b>Sobre o Jogo</b></p>
                <u>
                    <li><b>Data de Lançamento:</b> 22/11/2024</li>
                    <li><b>Início do Desenvolvimento:</b> 18/11/2024</li>
                    <li><b>Tecnologias Usadas:</b> O Jogo foi desenvolvido utilizando <b>JavaScript, HTML, CSS e React.
                        A IDE VS Code foi escolhida como ferramenta de desenvolvimento, permitindo que o processo fosse
                    ágil e eficiente.</b></li>
                    <li><b>Criador:</b> O Jogo foi desevolvido por Luwereal Queteres.</li>
                </u>
                <p>Agradecemos profundamente o seu apoio e interesse! Continue acompanhando as atualizações e novas versões que virão. Nos vemos em breve no próximo capítulo de <b>Revert Lang</b>.</p>
            </div>
        </div>
    )
}

export default Menu