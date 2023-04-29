import { boardSelectors, modalSelectors, playerSelectors, settingsSelectors } from 'entities'
import { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'

import { Colors } from '#/shared'
import { BoardComponent, SettingsModal } from '#/widgets'

export const Game = () => {
  const setCurrentPlayer = playerSelectors.use.setPlayer()
  const modal = modalSelectors.use.modal()
  const toggleModal = modalSelectors.use.toggleModal()
  const restart = boardSelectors.use.restart()
  const theme = settingsSelectors.use.theme()

  useEffect(() => {
    restart()
    setCurrentPlayer(Colors.WHITE)
  }, [restart, setCurrentPlayer])

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <>
      <div
        className={`w-[100vw] h-[100vh] flex items-center justify-center dark:bg-[#7e869c] bg-[#E8EDF9] p-2 ${
          modal ? 'blur-sm' : ''
        }`}
      >
        <button
          className='absolute top-5 right-5 bg-[#B7C0D8] p-1.5 rounded-full text-[#34364C] dark:text-black dark:bg-[#bfc9e0]'
          onClick={() => toggleModal(true)}
        >
          <FiSettings size={32} />
        </button>
        <BoardComponent />
      </div>
      {modal && <SettingsModal />}
    </>
  )
}
