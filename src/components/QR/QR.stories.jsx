/**
 * QR.jsx
 */
import React from 'react';
// import generateProps from 'react-generate-props'

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Mocks/Utils
// import { StorybookRouter } from '../../mocks/next/router'

// Component(s)
import QR from './QR';

// Generate some stub properties
// generateProps.init()
// const props = generateProps(QR);

// Decorators
const CenterDecorator = storyFn => (
  <div className="flex h-screen justify-center items-center">
    { storyFn() }
  </div>
);

// const RouterDecorator = (storyFn) => (
//   <StorybookRouter>{storyFn()}</StorybookRouter>
// )

storiesOf('QR', module)
  // .addDecorator(RouterDecorator)
  .addDecorator(CenterDecorator)
  .add('with required props', () => (
    <QR />
  ));
