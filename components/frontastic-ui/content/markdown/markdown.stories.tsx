import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Markdown from '.';

export default {
  title: 'Frontastic/Markdown',
  component: Markdown,
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => <Markdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: `## Am 26. Mai ist Vatertag!
Lassen Sie sich von unserem Geschenkeguide inspirieren und überraschen Sie Ihren
Papa mit einem besonderen Präsent.
Machen Sie ihm eine Freude mit modischen Accessoires wie Geldbörsen oder Gürteln aus Leder,
klassischen Manschettenknöpfen, handmontierten Miniaturmodellen oder überraschen Sie ihn mit einem neuen modernen Duft.`,
};
