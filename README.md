# typewriter

A simple React typewriter animation component inspired by [JS Typewriter by Simon Shahriveri](https://codepen.io/hi-im-si/pen/ALgzqo).

![](typewriter-animation.gif)

## Install

```bash
npm i @scarperharper/typewriter
```

## Usage

```tsx
import Typewriter from '@scarperharper/typewriter'
import React, { Component } from 'react'
import 'typewriter/dist/index.css'

class Example extends Component {
  render() {
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
  }
}
```

## License

MIT © [scarperharper](https://github.com/scarperharper)
