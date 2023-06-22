import './style.css';
import { getScores, renderScores, submitScore } from './modules/functions.js';

const submitForm = document.querySelector('#addScoreForm');
const refreshScoreBtn = document.querySelector('.btn.refresh');
const scoreBox = document.querySelector('.scores');

const gameId = 'Wg4I0z6OKTRJzU6wugcM';

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const scoreName = e.target.scoreName.value;
  const score = e.target.score.value;

  e.target.scoreName.value = '';
  e.target.score.value = '';

  (async () => {
    try {
      await submitScore(gameId, scoreName, score);
      const newScores = await getScores(gameId);
      renderScores(scoreBox, newScores.result);
    } catch (err) {
    //   Error will be handled here
    }
  })();
});

refreshScoreBtn.addEventListener('click', () => {
  (async () => {
    try {
      const res = await getScores(gameId);
      renderScores(scoreBox, res.result);
    } catch (err) {
      //   Error will be handled here
    }
  })();
});

document.addEventListener('DOMContentLoaded', () => {
  (async () => {
    try {
      const res = await getScores(gameId);
      renderScores(scoreBox, res.result);
    } catch (err) {
      //   Error will be handled here
    }
  })();
});