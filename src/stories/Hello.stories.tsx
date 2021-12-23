import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'antd';

import Hello from '../components/Hello';

export default {
  title: 'Example/Hello',
  component: Hello,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hello>;

// const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;
const Template: ComponentStory<typeof Hello> = (args) => (
  <Button type='primary' {...args}>
    Hi{' '}
  </Button>
);

export const Primary = Template.bind({});
