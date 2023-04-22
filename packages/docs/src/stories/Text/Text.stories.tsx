import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@handoven-ui/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sunt ipsum tempora animi laborum quam tempore doloremque neque possimus commodi vel veniam rerum saepe dolores, inventore quaerat earum sequi libero!',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export default meta

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `p`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
