import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Button from '../components/Button.js';

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y],
};

export const Primary = () => (
  <Button onClick={action('clicked', { depth: 1 })} typeOf="primary">
    Hello Button
  </Button>
);

Primary.story = {
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
};

export const Secondary = () => (
  <Button onClick={action('clicked', { depth: 1 })} typeOf="secondary">
    Hello Button
  </Button>
);

Secondary.story = {
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
};

export const Outline = () => (
  <Button onClick={action('clicked', { depth: 1 })} typeOf="outline">
    Hello Button
  </Button>
);

Outline.story = {
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
};

export const Succes = () => (
  <Button onClick={action('clicked', { depth: 1 })} typeOf="succes">
    Hello Button
  </Button>
);

Succes.story = {
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
};

export const Disabled = () => (
  <Button onClick={action('clicked', { depth: 1 })} typeOf="disabled" disabled>
    Hello Button
  </Button>
);

Disabled.story = {
  parameters: {
    options: { selectedPanel: 'storybook/actions/panel' },
  },
};
