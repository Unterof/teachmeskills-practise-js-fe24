import AnswerStatus from "./answerStatus";
import Navigation from "./navigation";
import Questions from "./questions";

import data from './data.json';

class App {
  constructor() {
    this.answerStatus = new AnswerStatus();
    this.navigation = new Navigation();
    this.questions = new Questions();

    this.currentIndex = 5;
  }

  render() {
    this.answerStatus.render(data.length, this.currentIndex);
    this.navigation.render();
    this.questions.render();
  }
}

let app = new App();
app.render();

