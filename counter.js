const React = require('react');
const { compose, withProps, withState } = require('proppy');
const { attach } = require('proppy-react');

const counter = ({ title, count, setCounter }) => (
  <div>
    <h3>{title}</h3>
    <p>Count: {count}</p>
    <button onClick={() => setCounter(count + 1)}>Increment</button>
  </div>
);

module.exports = attach(
  compose(
    withProps({ title: 'Hi!' }),
    withState('count', 'setCounter', 0)
  )
)(counter);
