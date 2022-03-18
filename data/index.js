import * as UTILS from "../utils/utils.js";

const transformQuestions = (questions) => {
        return questions.map(question =>{
            const questionNumber  = question["Question number"];
            delete question["Question number"];
            const annotations = Object.values(question).filter(str => str);
            return { questionNumber , annotations };
    })
}

export const getQuestions = async () => {
    const rawQuestions = await UTILS.csvParser('data/Questions.csv');
    const questions = transformQuestions(rawQuestions);
    return questions;
}

const transformTopics = (topics) => {
    return topics.map((topic, topicNumber) => {
      const hierarchy = Object.values(topic).filter(topicStr => topicStr);
      return { topicNumber, hierarchy };
    })
}

export const getTopics = async () => {
    const rawTopics = await UTILS.csvParser('data/Topics.csv');
    const topics = transformTopics(rawTopics);
    return topics;
}

