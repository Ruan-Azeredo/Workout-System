import React, { useState } from 'react'

const ModalPitaSucess = ({open, initialValue}) => {

    var animationStar, animationBar
    if(open == true){
        document.getElementById('pita_sucess_modal').showModal()
        animationStar=`.mask{animation: slidein 1s 0.3s}`
        animationBar=`.bar{animation: bar 2s; animation-fill-mode: forwards;}`

    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
{/*             <button className="btn" onClick={()=>document.getElementById('pita_sucess_modal').showModal()}>open modal</button>
 */}            <dialog id="pita_sucess_modal" className="modal">
            <div className="modal-box w-11/12 max-w-2xl">
                <h2 className='text-2xl font-bold text-center tracking-wider'>Parabens!!!</h2>
                <p className='text-secondary font-medium text-center mt-4'>Eba, você concluiu mais um treino e deixou o Pita muito feliz.</p>
                <p className='text-secondary text-center font-medium'>Você está cada vez mais gostosa, uhul!</p>
                <img src="/conquista.png" alt="" className='h-[400px] mx-auto pr-6' />
                <div className='justify-start'>
                    <div className="mask mask-star-2 bg-warning w-5 h-5 mx-20 relative -bottom-5 -z-10"></div>
                </div>
                <div className='w-[500px] h-5 bg-base-300 mx-auto rounded-full z-10'>
                    <div className={`bar bg-warning h-5 w-[${initialValue * 5}px] rounded-full`}></div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
            </dialog>
            <style jsx >{`
                @keyframes slidein {
                    0% {
                        transform: translateY(-500%) scale(200%);
                    }
                  
                    100% {
                        transform: translateY(0) scale(100%);
                    }
                }

                @keyframes bar {
                    0% {
                        width: ${initialValue * 5}px;
                    }
                    50% {
                        width: ${initialValue * 5}px;
                    }
                  
                    100% {
                        width: ${initialValue * 5 + 50}px;
                    }
                }
                ${animationStar}
                ${animationBar}
            `}</style>
        </div>
    )
}

export default ModalPitaSucess