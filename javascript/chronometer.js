class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    if (callback) {
      callback()
    }

    this.intervalId = setInterval(()=>{
      return this.currentTime+=1
    }, 10)

  }

  getMinutes() {
    return Math.floor(this.currentTime/100/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime/100%60)
  }

  getMiliSeconds () {
    return Math.floor(this.currentTime%100)
  }

  computeTwoDigitNumber(value) {
    if (value<10) {
      return "0"+value
    }
    else return value.toString()
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes())+":"+this.computeTwoDigitNumber(this.getSeconds())+":"+this.computeTwoDigitNumber(this.getMiliSeconds())
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
