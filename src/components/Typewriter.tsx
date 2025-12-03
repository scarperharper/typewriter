import type { TypewriterProps } from './TypewriterEngine'

import React, { useEffect, useState } from 'react'
import { TypewriterEngine } from './TypewriterEngine'

export function Typewriter({
  phrases,
  baseCadence = 50,
  delayBeforeStart = 500,
  delayBeforeDelete = 2000,
}: TypewriterProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    const engine = new TypewriterEngine(
      { phrases, baseCadence, delayBeforeStart, delayBeforeDelete },
      text => setText(text),
    )
    engine.tick()

    return () => {
      engine.stop()
    }
  }, [baseCadence, delayBeforeDelete, delayBeforeStart, phrases])

  return <span>{text}</span>
}
