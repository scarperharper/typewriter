import type { TypewriterProps } from '../components/TypewriterEngine'
import React from 'react'

import { Typewriter } from '../components/Typewriter'

import '../styles/example.scss'

export default {
  title: 'Components/Typewriter',
  component: Typewriter,
}

export function Default(args: React.JSX.IntrinsicAttributes & TypewriterProps) {
  return <Typewriter {...args} />
}

Default.args = {
  phrases: [
    'All human beings are born free and equal in dignity and rights.',
    'Everyone is entitled to all the rights and freedoms set forth in this Declaration.',
    'Everyone has the right to life, liberty and security of person.',
  ],
  baseCadence: 50,
  delayBeforeStart: 500,
  delayBeforeDelete: 2000,
}
