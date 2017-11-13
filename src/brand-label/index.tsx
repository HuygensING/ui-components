import * as React from 'react';

const levisLabel = () =>
	<div
		style={{
      position: 'fixed',
      right: '0',
      bottom: '80px',
      margin-right: '-35px',
      border-radius: '2px 0px 2px 0px',
      background-color: '#268f75',
      color: '#fff',
      padding: '0em 1em',
      font-size: '.6em',
      transform: 'rotate(90deg)',
		}}
	>
    Powered by
    <img
    style={{
      height: 'auto',
      width: '17px',
      margin: '-5px 0 -5px 0',
    }}
    src="http://design.huygens.knaw.nl/wp-content/themes/huc-design-system/images/logo-timbuctoo-inv.svg"
    alt="Pergamon"/>
  </div>;

export default levisLabel;
