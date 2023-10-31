import React, { useState } from 'react'
import ModalPitaSucess from './ModalPitaSucess'

const Avatar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex group'>
            <div className="chat chat-end bottom-11 -right-4 relative hidden group-hover:flex">
                <div className="chat-bubble chat-bubble-primary">Eu sou o <strong>Pita</strong>, a sua preguiça personal</div>
            </div>
            <div className='w-20 rounded-full bg-primary p-1' onClick={() => setOpen(!open)}>
                <img src="/pita.jpeg" alt="" className='rounded-full'/>
            </div>
            {/* <ModalPitaSucess open={open} initialValue={10}/> */}
        </div>
    )
}

export default Avatar