import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from '../App';

export default {
  title: 'Example/App',
  component: App,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
