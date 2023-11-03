import React from 'react';
import { Link } from 'react-router-dom';


function Home() {




    return(
        <div className="geral">
            <div className='cabeça'>
                <h1 className='title'>Bio Wild</h1>
                <img className='logoo' src="./src/assets/logo1.png" alt="Bio Wild Logo" />
            </div>


            <div className="bixo">
                <h2>Denúncias Anônimas</h2>
                <p>Para a proteção do nosso meio ambiente faca sua denúncia de forma anônima.</p>
               <Link to='/chatbot' > <button>Denuncie!!</button></Link>
            </div>

            <div className='oiiii'>
                <h1>Quem somos?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam possimus ducimus labore a, cum rerum sapiente eum. 
                    Maiores dolor amet consequatur, totam sint saepe voluptatibus esse sapiente,
                    exercitationem, est sequi?</p>
            </div>

            <div class="card-container">
                <div class="card">
                    <h2>Card 1</h2>
                    <p>Este é o primeiro card.</p>
                </div>
                <div class="card">
                    <h2>Card 2</h2>
                    <p>Este é o segundo card.</p>
                </div>
                <div class="card">
                    <h2>Card 3</h2>
                    <p>Este é o terceiro card.</p>
                </div>
            </div>







        </div>
        
    )
}

export default Home
