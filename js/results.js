import {results, mbtis} from './data.js'

const mbti = new URLSearchParams(location.search).get('abcd')
console.log(mbti)

const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const teamlogoEl = document.querySelector('.team-logo')
const boxEls = document.querySelectorAll('.box')

titleEl.innerHTML = result.title
titleEl.classList.add(result.title)
teamlogoEl.src = result.character
boxEls.forEach(function(boxEl, index){
  boxEl.innerHTML = result.results[index]
})


const btnShareTw = document.querySelector('#shareTwt');

btnShareTw.addEventListener('click', () => {
  const sendText = '사이렌: 불의 섬 나와 잘 맞는 팀은 - ' + result.kor + '팀!';
  const pageUrl = location.href;
  const qtOrigin = 'https://twitter.com/bluerecrue/status/1666129212460396544?s=46&t=3U5Hrdp4j3IaLZ66Q1Z7RQ';
  window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${pageUrl} \n ${qtOrigin}`);
})