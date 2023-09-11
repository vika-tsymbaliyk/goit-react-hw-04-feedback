import { ButtonWrap, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return(
        <ButtonWrap>
        {options.map(option =>( <Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>)
        )}
        </ButtonWrap>
    )
}