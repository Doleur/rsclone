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
    gainNode.gain.value = 0.5
  } else {
    gainNode.gain.value = 0
  }
  source.start()
}

const soundPlay = async url => {
  const context = new AudioContext()
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
  source.start(0)

  soundPlayMute = function () {
    gainNode.gain.value = 0
  }
}
sound.addEventListener('click', () => {
  if (sound.classList.contains('unmute')) {
    soundPlayMute()
    sound.classList.remove('unmute')
    sound.classList.add('mute')
    sound.innerHTML = `<span class="material-icons">
    music_off
    </span>`
  } else if (!sound.classList.contains('unmute')) {
    soundPlay('assets/audio/arctic_sunrise.mp3')
    sound.classList.remove('mute')
    sound.classList.add('unmute')
    sound.innerHTML = `<span class="material-icons">
    music_note
    </span>`
  }
})
audio.addEventListener('click', () => {
  if (audio.classList.contains('unmute')) {
    audio.classList.remove('unmute')
    audio.classList.add('mute')
    audio.innerHTML = `<span class="material-icons">
    volume_off
    </span>`
  } else if (!audio.classList.contains('unmute')) {
    audio.classList.remove('mute')
    audio.classList.add('unmute')
    audio.innerHTML = `<span class="material-icons">
    volume_up
    </span>`
  }
})
export { audioPlay }
//  api
