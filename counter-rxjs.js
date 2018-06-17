import React from 'react';

import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import { withStream } from 'proppy-rx';
import { attach } from 'proppy-react';

const P = withStream(incomingProps$ => {
  return interval(1000).pipe(map(n => ({ interval: n })));
});

function MyComponent({ interval }) {
  return <p>Interval: {interval}</p>;
}

export default attach(P)(MyComponent);
