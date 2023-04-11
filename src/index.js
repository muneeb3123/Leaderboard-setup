import './style.css';
import Score from './modules/score.js';

const newScore = new Score();
const addScore = document.querySelector('.input-user');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('scores').value;
  newScore.addList({ name, score });

  addScore.name.value = '';
  addScore.scores.value = '';
});

newScore.init();
