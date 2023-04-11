class Score {
  constructor() {
    this.showData = document.querySelector('.dom-show');
    this.collection = JSON.parse(localStorage.getItem('scoreData')) || [
      {
        id: 1,
        name: 'Muneeb',
        score: 100,
      },
      {
        id: 2,
        name: 'Talha',
        score: 100,
      },
      {
        id: 3,
        name: 'Waqar',
        score: 100,
      },
      {
        id: 4,
        name: 'Faisal',
        score: 100,
      },
      {
        id: 5,
        name: 'Ali',
        score: 100,
      },
    ];
  }

  renderData = () => {
    this.showData.innerHTML = this.collection
      .map((item) => `<li class='score-item'>${item.name} : ${item.score}</li>`)
      .join('');
  };

  addList = ({ name, score }) => {
    this.collection.push({
      id: this.collection.length + 1,
      name,
      score,
    });
    localStorage.setItem('scoreData', JSON.stringify(this.collection));
    this.renderData();
  };

  init = () => {
    this.renderData();
  };
}

export default Score;
