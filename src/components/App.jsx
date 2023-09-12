import { useState } from "react";
import { Layout } from "./Layout";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export const App = ()=> {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = options;

  const totalFeedbacks = good + bad + neutral;

  const countPositiveFeedbackPercentage =() => {
    const percentage = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;
    return percentage.toFixed(0);
  }

  const onLeaveFeedback = (option) => {
    setOptions((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const optionsKeys = Object.keys(options);
  
    return (
    <Layout>
    <Section title= "Please leave feedback">
    <FeedbackOptions optionsKeys={optionsKeys} onLeaveFeedback={onLeaveFeedback}/>
    </Section> 

    <Section title="Statistics">
    {totalFeedbacks ? <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedbacks} positivePercentage={countPositiveFeedbackPercentage}/>:<Notification message="There is no feedback"/>}
    </Section>
    </Layout>
     
  );
};
