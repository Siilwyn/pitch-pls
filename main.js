const fs = require('fs');
const bespoke = require('bespoke');
const bespokeKeys = require('bespoke-keys');

bespoke
  .from('body', [bespokeKeys('vertical')])
  .on('activate', ({ slide }) => {
    slide.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  });

const highlightJs = require('highlight.js');
highlightJs.initHighlightingOnLoad();

const React = require('react');
const { render } = require('react-dom');
const counter = require('./counter.js');
render(counter(), document.querySelector('[data-counter]'));
document.querySelector('[data-counter-content]').textContent = fs.readFileSync(
  'counter.js',
  'utf8'
);
document.querySelector(
  '[data-counter-rxjs-content]'
).textContent = fs.readFileSync('counter-rxjs.js', 'utf8');

document.querySelector('[data-crocks-content]').textContent = fs.readFileSync(
  'crocks.js',
  'utf8'
);
