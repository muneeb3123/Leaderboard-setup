class Score {
  constructor() {
    this.showData = document.querySelector('.dom-show');
    this.collection = [];
    this.link = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wVpJdekyVeWw4P4hGrPS/scores/';
  }

  message = () => {
    const submitSucess = document.querySelector('.submit-success');
    submitSucess.classList.remove('display-none');
    setTimeout(() => {
      submitSucess.classList.add('display-none')
    }, 2000)
  }

  fetchData = async () => {
    try {
      const response = await fetch(this.link);
      const data = await response.json();
      data.result.sort((a, b) => b.score - a.score);
      this.collection = data.result;
      return this.renderData();
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  renderData = () => {
    this.showData.innerHTML = this.collection
      .map((item) => `<li class='score-item'>${item.user} : ${item.score}</li>`)
      .join('');
  };

  addList = async ({ user, score }) => {
    try {
      const response = await fetch(this.link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score }),
      });
      const data = await response.json();
      this.collection.push(data);
      this.fetchData();
      this.message();
    } catch (error) {
      console.error('Error:', error);
    }
  };
}

export default Score;
