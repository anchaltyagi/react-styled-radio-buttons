import React, {PropTypes} from 'react';
import classNames from 'classnames'

function radio(name, selectedValue, onChange) {
  return React.createClass({    

      getInitialState(){
        return {
          compSelectedValue: selectedValue
        }
      },
      handleClick(event) {
        //Clear selected value if clicked again
        if (this.refs.input.getDOMNode().value === this.state.compSelectedValue) {
           this.refs.input.getDOMNode().value = '';
        }        
        onChange.call(null, this.refs.input.getDOMNode().value);
      },
      render() {
         var classes = classNames(
          'react-radio',
          'react-radio-label', 
          {'react-radio-label-checked': this.state.compSelectedValue === this.props.value});
      return (
          <input
            {...this.props}
            ref="input"
            className={classes}
            type="radio"
            name={name}
            onChange={this.handleClick}/>
      );
    }
  });
}

export default React.createClass({
  displayName: 'YesNoRadioComponent',
  propTypes: {
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    children: PropTypes.func.isRequired
  },
   render: function() {
    const {name, selectedValue, onChange, children} = this.props;
    const renderedChildren = children(radio(name, selectedValue, onChange));
    return renderedChildren && React.Children.only(renderedChildren);
  }
});