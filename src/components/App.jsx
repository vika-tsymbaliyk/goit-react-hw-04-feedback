import { Component } from "react";
import { Layout } from "./Layout";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistic } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) =>{
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }

  countTotalFeedback =()=>{
    const { good, neutral, bad } = this.state;
    return good + bad + neutral
  }

  countPositiveFeedbackPercentage =()=>{
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const percentage = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;
    return percentage.toFixed(0);
  }

  render(){
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;


    return (
    <Layout>
    <Section title= "Please leave feedback">
    <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
    </Section>

    <Section title="Statistics">
    {this.countTotalFeedback() ? <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>:<Notification message="There is no feedback"/>}
    </Section>
    </Layout>
     
  );}
};
