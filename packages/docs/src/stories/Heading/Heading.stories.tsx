import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@handoven-ui/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sunt ipsum tempora animi laborum quam tempore doloremque neque possimus commodi vel veniam rerum saepe dolores, inventore quaerat earum sequi libero!',
  },
  argType: {
    argTypes: {
      size: {
        options: ['xxs', 'xs', 'sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
        control: {
          type: 'inline-radio',
        },
      },
    },
  },
}

export default meta

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
