import { StatisticWrap } from "./Statistics.styled"

export const Statistic = ({good, neutral, bad, total, positivePercentage}) =>{
    return (
        <StatisticWrap>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback : {positivePercentage()}% </span>
        </StatisticWrap>
    )
}