'use strict';

import React from 'react';
import RadioGroup from '../yesNoRadioComponent.jsx';

let App = React.createClass({
  getInitialState() {
    return {selectedValue: 'acute', checked: true};
  },

  handleChange(value) {
    this.setState({selectedValue: value});
  },

  render() {
    return (
      <div>
      <RadioGroup
        name="fruit"
        onChange = {this.handleChange}
        selectedValue={this.state.selectedValue}>
        {Radio => (
          <div>
            <label>
              <Radio value="acute" />Acute
            </label>
            <label>
              <Radio value="chronic" />Chronic
            </label>
            <label>
              <Radio value="none" />Not Documented
            </label>
          </div>
        )}
      </RadioGroup>
      <br/>
      <br/>
      <div>Selected value: {this.state.selectedValue}</div>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));
