import { CardContainer, ResultContainer } from "./Home.styles"
import { IconContainer } from "./Home.styles"
import { ButtonContainer } from "./Home.styles"
import { useState } from "react"


import iconStarImg from "../assets/icon-star.svg"
import thankYouImg from "../assets/illustration-thank-you.svg"

export function Home() {
  const [mostraResultado, setMostraResultado] = useState(false)
  const [feedbackNote, setFeedbackNote] = useState(0)

  function handleFeedbackButtonClick(event){
    const feedback = Number(event.target.innerText)

    setFeedbackNote(feedback)
  }

  function handleSubmit() {
    if  (feedbackNote === 0) return

    setMostraResultado(true)
  }

  return (
    mostraResultado === false ? (
      <CardContainer>
        <IconContainer>
          <img src={iconStarImg} alt="estrela" />
        </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>
        <ButtonContainer>
          <button onClick={handleFeedbackButtonClick}>1</button>
          <button onClick={handleFeedbackButtonClick}>2</button>
          <button onClick={handleFeedbackButtonClick}>3</button>
          <button onClick={handleFeedbackButtonClick}>4</button>
          <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>

      <button  onClick={handleSubmit}>Enviar</button>
    </CardContainer>
    ):(
      <CardContainer>
        <img src={thankYouImg} alt="" />
        <ResultContainer>
          <p>Você selecionou {feedbackNote} de 5</p>
        </ResultContainer>

        <h1>Obrigado!</h1>

        <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
    </CardContainer>
    )
  )
}

