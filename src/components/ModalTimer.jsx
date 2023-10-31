import React, { useState } from 'react'

const ModalTimer = ({restTime}) => {

    const [tempoRestante, setTempoRestante] = useState({mins: 0, secs: 0});
    
    const start = () => {

        const mins = restTime * 60000
        const dataAlvo = new Date().getTime() + mins;
    
        const intervalo = setInterval(() => {
            const agora = new Date().getTime();
            const diferenca = dataAlvo - agora;
        
            if (diferenca <= 0) {
                clearInterval(intervalo);
                setTempoRestante("Chegou o momento!");
                return;
            }
        
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        
            setTempoRestante({mins: minutos, secs: segundos})
        }, 1000);
    
        return () => clearInterval(intervalo);// Substitua com a data desejada
    }

    return (
        <div>
            <button className='flex h-fit p-2 m-1 bg-accent rounded-full' onClick={()=>document.getElementById('my_modal_timer').showModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
            <dialog id="my_modal_timer" className="modal">
                <div className="modal-box flex flex-col">
                    <button className='btn w-fit px-6 bg-primary mx-auto' onClick={start}>Start</button>
                    <span className="countdown font-mono text-2xl p-6 mx-auto">
                        <span style={{"--value":tempoRestante.mins}}></span>:
                        <span style={{"--value":tempoRestante.secs}}></span>
                    </span>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default ModalTimer