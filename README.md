# typewriter

A simple React typewriter animation component inspired by [JS Typewriter by Simon Shahriveri](https://codepen.io/hi-im-si/pen/ALgzqo).

[![NPM](https://img.shields.io/npm/v/typewriter.svg)](https://www.npmjs.com/package/typewriter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @scarperharper/typewriter
```

## Usage

```tsx
import React, { Component } from 'react'
import Typewriter from '@scarperharper/typewriter'
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
