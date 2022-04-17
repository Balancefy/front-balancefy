import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonBalancefy from '../../components/Button'
import './index.css'
import Particle from './particle'



export default function NotFound() {
    const particles = [];
    for (let i  = 0; i <= 83; i++){
        if(i > 41){
            particles.push({number: 0});
        }else{
            particles.push({number:4})
        }
    }
    const navigate = useNavigate();

    
    const particlesSystem = particles.map((particle) => {
        return (
            <>
                {particle.number == 0 ? <Particle zero/>  : <Particle/> }
          </>
        )
    })

    return (
        <>
            <main className='container'>
                {particlesSystem}
                <article className='content'>
                    <p>Droga,</p>
                    <p>Você se perdeu na galáxia <strong>404</strong></p>
                    <p>
                        <ButtonBalancefy onClick={() => navigate("/", {replace:true})}>Voltar para a terra</ButtonBalancefy>
                    </p>
                </article>
            </main>
        </>
    )
}