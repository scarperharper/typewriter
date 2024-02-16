import React from 'react'
import { Typewriter } from '../components/Typewriter'
// eslint-disable-next-line no-unused-vars
import { TypewriterProps } from '../components/TypewriterEngine'

export default {
  title: 'Components/Typewriter',
  component: Typewriter
}

export function Default(args: React.JSX.IntrinsicAttributes & TypewriterProps) {
  return <Typewriter {...args} />
}

Default.args = {
  phrases: [
    'All human beings are born free and equal in dignity and rights.',
    'Everyone is entitled to all the rights and freedoms set forth in this Declaration',
    'Everyone has the right to life, liberty and security of person.'
  ],
  baseCadence: 50,
  delayBeforeStart: 500,
  delayBeforeDelete: 2000
}
