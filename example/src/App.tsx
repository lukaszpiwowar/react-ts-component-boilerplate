import React, { Component } from 'react';

import { FaqComponent } from './reactComponentLib';

class App extends Component {
  render() {
    return (
      <div>
        <FaqComponent text="Styled Component from React library" />
      </div>
    );
  }
}

export default App;
