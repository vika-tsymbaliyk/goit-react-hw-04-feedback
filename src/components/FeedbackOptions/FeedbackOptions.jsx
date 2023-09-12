import { ButtonWrap, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({optionsKeys, onLeaveFeedback}) =>{
    return(
        <ButtonWrap>
        {optionsKeys.map(option =>( <Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>)
        )}
        </ButtonWrap>
    )
}