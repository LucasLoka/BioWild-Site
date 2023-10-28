import React from 'react';

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
                <button onClick={() => {}}>Denuncie!!</button>
            </div>

            <div className='oiiii'>
                <h1>Quem somos?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quam possimus ducimus labore a, cum rerum sapiente eum. 
                    Maiores dolor amet consequatur, totam sint saepe voluptatibus esse sapiente,
                    exercitationem, est sequi?</p>
            </div>

            






        </div>
        
    )
}

export default Home
