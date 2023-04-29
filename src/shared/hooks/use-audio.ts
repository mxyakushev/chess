import { settingsSelectors } from '#/entities'

type Options = {
  volume?: number
  playbackRate?: number
}

const DEFAULT_MUSIC_PATH = '/audio/action-sound.mp3'

const audioPool = (() => {
  const pool: HTMLAudioElement[] = []

  const getAudio = (): HTMLAudioElement => {
    const audio = pool.find(a => a.paused)

    if (audio) {
      return audio
    } else {
      const newAudio = new Audio()
      pool.push(newAudio)
      return newAudio
    }
  }

  return { getAudio }
})()

export const useAudio = (src: string = DEFAULT_MUSIC_PATH, options: Options = {}): { play: () => void } => {
  const { volume = 1, playbackRate = 1 } = options
  const isPlaying = settingsSelectors.use.sound()

  const play = () => {
    const sound = audioPool.getAudio()
    sound.src = src
    sound.playbackRate = playbackRate
    sound.volume = isPlaying ? volume : 0
    sound.play()
  }

  return { play }
}
