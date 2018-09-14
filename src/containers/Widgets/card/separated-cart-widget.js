import React, { Component } from 'react';
import CardWidgetWrapper from './style';

export default class SeparatedCardWidget extends Component {
  
  render() {
    const { header, text} = this.props;
    return (
          <div className="isoContentWrapper">
          <h3 className="isoStatNumber">
            {header}
          </h3>
          <span className="isoLabel">
            {text}
          </span>
        </div>
    )
  }
}
{
  /*
  {showDivision ? (<div className="divider"></div>) : null}
  */
}
