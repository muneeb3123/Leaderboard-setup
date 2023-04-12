class Score {
  constructor() {
    this.showData = document.querySelector('.dom-show');
    this.collection = [];
    this.link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wVpJdekyVeWw4P4hGrPS/scores/';
  }

  fetchData = () => {
    fetch(this.link)
      .then((response) => response.json())
      .then((data) => {
        this.collection = data.result;
        return this.renderData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  renderData = () => {
    this.showData.innerHTML = this.collection
      .map((item) => `<li class='score-item'>${item.user} : ${item.score}</li>`)
      .join('');
  };

  addList = ({ user, score }) => {
    fetch(this.link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.collection.push(data);
        this.fetchData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
}

export default Score;
