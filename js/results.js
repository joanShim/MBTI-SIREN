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