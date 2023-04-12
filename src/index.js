import './style.css';
import Score from './modules/score.js';

const newScore = new Score();
const addScore = document.querySelector('.input-user');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('scores').value;
  newScore.addList({ user, score });

  addScore.name.value = '';
  addScore.scores.value = '';
});

const refresh = document.querySelector('.refresh-btn');
refresh.addEventListener('click', () => {
  newScore.fetchData();
});
