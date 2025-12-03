export interface TypewriterProps {
  /**
   * An array of phrases which are cycled
   */
  phrases: string[]
  /**
   * Both the minimum delay between characters and the amount this might be randomly increased, in ms
   */
  baseCadence: number
  /**
   * How long to wait when the text is blank and adding the first character
   */
  delayBeforeStart: number
  /**
   * How long to wait between a phrase's last character appearance and its deletion
   */
  delayBeforeDelete: number
}

export class TypewriterEngine {
  loopNum = 0
  txt = ''
  isDeleting = false
  props: TypewriterProps
  callback: (text: string) => void
  timeoutRef: NodeJS.Timeout

  constructor(props: TypewriterProps, callback: (text: string) => void) {
    this.props = props
    this.callback = callback
  }

  tick() {
    const phrase = this.props.phrases[this.loopNum % this.props.phrases.length]

    if (this.isDeleting) {
      this.txt = phrase.substring(0, this.txt.length - 1)
    }
    else {
      this.txt = phrase.substring(0, this.txt.length + 1)
    }

    let delta = this.props.baseCadence + Math.random() * this.props.baseCadence

    if (this.isDeleting) {
      delta /= 2
    }

    if (!this.isDeleting && this.txt === phrase) {
      delta = this.props.delayBeforeDelete
      this.isDeleting = true
    }
    else if (this.isDeleting && this.txt === '') {
      delta = this.props.delayBeforeStart
      this.isDeleting = false
      this.loopNum++
    }

    this.callback(this.txt)

    this.timeoutRef = setTimeout(() => {
      this.tick()
    }, delta)
  }

  stop() {
    clearTimeout(this.timeoutRef)
  }
}
