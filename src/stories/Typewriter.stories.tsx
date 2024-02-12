import React from 'react'
import Typewriter from '../components/Typewriter'

export default {
  title: 'Typewriter',
  component: Typewriter
}

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
