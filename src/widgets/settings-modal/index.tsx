import { BiAtom, BiGhost } from 'react-icons/bi'
import { CgClose, CgCloseO } from 'react-icons/cg'
import { FiMusic } from 'react-icons/fi'
import { ImSun } from 'react-icons/im'
import { TbMoon } from 'react-icons/tb'

import { modalSelectors, settingsSelectors } from '#/entities'
import { BoardStyle } from '#/shared'

const Overlay = () => <div className='fixed inset-0 w-full h-full bg-black bg-opacity-50' />

export const SettingsModal = () => {
  const toggleModal = modalSelectors.use.toggleModal()
  const setStyle = settingsSelectors.use.setStyle()
  const toggleTheme = settingsSelectors.use.toggleTheme()
  const theme = settingsSelectors.use.theme()
  const style = settingsSelectors.use.boardStyle()

  const handleStyleClick = (style: BoardStyle) => {
    setStyle({ style })
    toggleModal(false)
  }

  const buttonStyle = (selectedStyle: BoardStyle) =>
    `rounded-lg bg-gray-200 dark:bg-gray-700 p-2 w-full flex justify-center font-bold transition duration-300 ${
      style === selectedStyle ? 'opacity-50' : 'opacity-100'
    }`

  return (
    <>
      <Overlay />
      <div className='fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[250px] rounded-lg shadow-md bg-white text-gray-900 dark:bg-gray-800 dark:text-white font-medium'>
        <div className='w-full flex justify-end p-2'>
          <button onClick={() => toggleModal(false)}>
            <CgClose size={32} className='transition duration-300 hover:scale-110' />
          </button>
        </div>
        <div className='px-4 pb-4'>
          <h2 className='font-bold text-2xl mb-4 text-center'>BOARD STYLE</h2>
          <div className='flex space-x-4 mb-4'>
            <button
              className={buttonStyle(BoardStyle.NO_STYLES)}
              onClick={() => handleStyleClick(BoardStyle.NO_STYLES)}
            >
              <CgCloseO size={40} />
            </button>
            <button
              className={buttonStyle(BoardStyle.INSIDE_BOARD)}
              onClick={() => handleStyleClick(BoardStyle.INSIDE_BOARD)}
            >
              <BiAtom size={40} />
            </button>
            <button
              className={buttonStyle(BoardStyle.OUTSIDE_BOARD)}
              onClick={() => handleStyleClick(BoardStyle.OUTSIDE_BOARD)}
            >
              <BiGhost size={40} />
            </button>
          </div>
          <div className='flex space-x-4'>
            <div className='w-full'>
              <h2 className='font-bold text-2xl mb-4 text-center'>SOUND</h2>
              <button className='rounded-lg bg-gray-200 dark:bg-gray-700 p-2 w-full flex justify-center font-bold transition duration-300'>
                <FiMusic size={40} />
              </button>
            </div>
            <div className='w-full'>
              <h2 className='font-bold text-2xl mb-4 text-center'>THEME</h2>
              <button
                className='rounded-lg bg-gray-200 dark:bg-gray-700 p-2 w-full flex justify-center font-bold transition duration-300'
                onClick={() => toggleTheme()}
              >
                {theme === 'light' ? <TbMoon size={40} /> : <ImSun size={40} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
