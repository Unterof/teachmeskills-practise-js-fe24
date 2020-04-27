class AnswerStatus {
  constructor() {
    this.container = document.getElementById('answers-status');
  }
  render(count, currentIndex) {
    let statusString = '';
    for (let i = 0; i < count; i++) {
      if (i === currentIndex) {
        statusString += '*';
      } else {
        statusString += '0';
      }
    }
    this.container.innerText = statusString;
  }
}
export default AnswerStatus;