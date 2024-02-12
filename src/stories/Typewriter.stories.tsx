import React from 'react'
import { Typewriter } from '../components/Typewriter'
// eslint-disable-next-line no-unused-vars
import type { Meta } from '@storybook/react'

export const Default = () => (
  <Typewriter
    phrases={[
      'All human beings are born free and equal in dignity and rights.',
      'Everyone is entitled to all the rights and freedoms set forth in this Declaration',
      'Everyone has the right to life, liberty and security of person.'
    ]}
    baseCadence={50}
    delayBeforeStart={500}
    delayBeforeDelete={2000}
  />
)

const meta: Meta<typeof Typewriter> = {
  title: 'Typewriter',
  component: Typewriter
}

export default meta
