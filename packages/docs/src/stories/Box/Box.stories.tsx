import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@handoven-ui/react'

const meta: Meta<BoxProps> = {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <p>Testando o elemento Box</p>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default meta

export const Primary: StoryObj<BoxProps> = {}
