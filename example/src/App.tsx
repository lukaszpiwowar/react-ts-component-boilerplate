import React, { Component } from 'react';

import { FaqComponent, RowItem } from './reactComponentLib';

const data: RowItem[] = [
  {
    pos: 1,
    question: 'Fames ac turpis velit, rhoncus eu, luctus et interdum?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. '
  },
  {
    pos: 2,
    question: 'Lorem ipsum dolor sit amet enim?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. '
  },
  {
    pos: 3,
    question: 'Etiam ullamcorper. Suspendisse a pellentesque?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. '
  },
  {
    pos: 4,
    question: 'Quisque lorem tortor fringilla sed, vestibulum id, elei?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 5,
    question: 'Cum sociis natoque penatibus et ultrices volutpa?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 6,
    question: 'Quisque lorem tortor fringilla sed, vestibulum id, elei?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 7,
    question: 'Quisque cursus et, porttitor risus?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 8,
    question: 'Nullam wisi ultricies a, gravida?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 9,
    question: 'Quisque lorem tortor fringilla sed, vestibulum id, elei?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  },
  {
    pos: 10,
    question: 'Lorem ipsum dolor sit amet enim?',
    answer: 'Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
  }
];

class App extends Component {
  render() {
    return (
      <div style={{ width: '1170px', margin: '10px auto' }}>
        <FaqComponent data={data}/>
      </div>
    );
  }
}

export default App;
