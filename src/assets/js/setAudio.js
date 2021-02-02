// web  audio api
const sound = document.querySelector('.sound')
const audio = document.querySelector('.audio')
let soundPlayMute

window.AudioContext = window.AudioContext || window.webkitAudioContext
const audioPlay = async url => {
  const context = new AudioContext({ latencyHint: 'playback' })
  const source = context.createBufferSource()
  const audioBuffer = await fetch(url)
    .then(res => res.arrayBuffer())
    .then(ArrayBuffer => context.decodeAudioData(ArrayBuffer))

  source.buffer = audioBuffer
  var gainNode = context.createGain()
  source.connect(gainNode)
  gainNode.connect(context.destination)

  if (audio.classList.contains('unmute')) {
    gainNode.gain.value = 1
  } else {
    gainNode.gain.value = 0
  }
  source.start()
}

const soundPlay = async url => {
  const context = new AudioContext({ latencyHint: 'playback' })
  const source = context.createBufferSource()
  const audioBuffer = await fetch(url)
    .then(res => res.arrayBuffer())
    .then(ArrayBuffer => context.decodeAudioData(ArrayBuffer))

  source.buffer = audioBuffer
  var gainNode = context.createGain()
  source.connect(gainNode)
  source.loop = true
  gainNode.connect(context.destination)
  // source.connect(context.destination);

  gainNode.gain.value = 0.5
  source.start()

  soundPlayMute = function () {
    gainNode.gain.value = 0
  }
}
sound.addEventListener('click', () => {
  if (sound.classList.contains('unmute')) {
    soundPlayMute()
    sound.classList.remove('unmute')
    sound.classList.add('mute')
  } else if (!sound.classList.contains('unmute')) {
    soundPlay('assets/audio/arctic_sunrise.mp3')
    sound.classList.remove('mute')
    sound.classList.add('unmute')
  }
})
audio.addEventListener('click', () => {
  if (audio.classList.contains('unmute')) {
    audio.classList.remove('unmute')
    audio.classList.add('mute')
  } else if (!audio.classList.contains('unmute')) {
    audio.classList.remove('mute')
    audio.classList.add('unmute')
  }
})
soundPlay('assets/audio/arctic_sunrise.mp3')

export { audioPlay }
//  api
