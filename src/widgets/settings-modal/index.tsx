import { BiAtom, BiGhost } from 'react-icons/bi'
import { CgClose, CgCloseO } from 'react-icons/cg'
import { FiMusic } from 'react-icons/fi'
import { TbMoon } from 'react-icons/tb'

import { boardSelectors, modalSelectors } from '#/entities'
import { BoardStyle } from '#/shared'

const Overlay = () => <div className='fixed top-0 w-full h-full bg-black opacity-50' />

export const SettingsModal = () => {
  const toggleModal = modalSelectors.use.toggleModal()
  const setStyle = boardSelectors.use.setStyle()

  const handleStyleClick = (style: BoardStyle) => {
    setStyle({ style })
    toggleModal(false)
  }

  return (
    <>
      <Overlay />
      <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] rounded bg-[#E8EDF9] text-[#34364C] font-medium'>
        <div className='w-full flex justify-end p-1'>
          <button onClick={() => toggleModal(false)}>
            <CgClose size={32} className='transition hover:scale-110' />
          </button>
        </div>
        <div className='px-2 pb-2'>
          <h2 className='font-bold text-2xl mb-2 text-center'>BOARD STYLE</h2>
          <div className='flex space-x-2 mb-2'>
            <button
              className='rounded bg-[#B7C0D8] p-1 w-full flex justify-center font-bold'
              onClick={() => handleStyleClick(BoardStyle.NO_STYLES)}
            >
              <CgCloseO size={40} />
            </button>
            <button
              className='rounded bg-[#B7C0D8] p-1 w-full flex justify-center font-bold'
              onClick={() => handleStyleClick(BoardStyle.INSIDE_BOARD)}
            >
              <BiAtom size={40} />
            </button>
            <button
              className='rounded bg-[#B7C0D8] p-1 w-full flex justify-center font-bold'
              onClick={() => handleStyleClick(BoardStyle.OUTSIDE_BOARD)}
            >
              <BiGhost size={40} />
            </button>
          </div>
          <h2 className='font-bold text-2xl mb-2 text-center'>SOUND</h2>
          <button className='rounded bg-[#B7C0D8] p-1 w-full flex justify-center font-bold'>
            <FiMusic size={40} />
          </button>
          <h2 className='font-bold text-2xl mb-2 text-center'>THEME</h2>
          <button className='rounded bg-[#B7C0D8] p-1 w-full flex justify-center font-bold'>
            <TbMoon size={40} />
          </button>
        </div>
      </div>
    </>
  )
}
