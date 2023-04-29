import { useEffect, useRef } from 'react'

type Options = {
  volume?: number
  playbackRate?: number
}

const DEFAULT_MUSIC_PATH = '/audio/action-sound.mp3'

export const useAudio = (src: string = DEFAULT_MUSIC_PATH, options: Options = {}) => {
  const { volume = 1, playbackRate = 1 } = options
  const sound = useRef(new Audio(src))

  useEffect(() => {
    sound.current.playbackRate = playbackRate
  }, [playbackRate])

  useEffect(() => {
    sound.current.volume = volume
  }, [volume])

  return sound.current
}
