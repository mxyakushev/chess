import { settingsSelectors } from '#/entities'

interface Options {
  volume?: number
  playbackRate?: number
}

const DEFAULT_MUSIC_PATH = '/audio/action-sound.mp3'

class AudioPool {
  private pool: HTMLAudioElement[] = []

  public getAudio(): HTMLAudioElement {
    const audio = this.pool.find(a => a.paused)

    return audio ?? this.createAudio()
  }

  private createAudio(): HTMLAudioElement {
    const newAudio = new Audio()
    this.pool.push(newAudio)
    return newAudio
  }
}

const audioPool = new AudioPool()

export const useAudio = (src: string = DEFAULT_MUSIC_PATH, options: Options = {}): { play: () => void } => {
  const isPlaying = settingsSelectors.use.sound()
  const volume = options.volume ?? 1
  const playbackRate = options.playbackRate ?? 1

  const initializeAudio = (): HTMLAudioElement | null => {
    if (!isPlaying) return null

    const sound = audioPool.getAudio()
    sound.src = src
    sound.playbackRate = playbackRate
    sound.volume = volume

    return sound
  }

  const play = () => {
    const sound = initializeAudio()

    sound?.play().catch(error => {
      console.log('Audio play error:', error)
    })
  }

  return { play }
}
