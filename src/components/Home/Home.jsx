import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';


function Home() {

    const images = [
        'https://conteudo.imguol.com.br/c/entretenimento/a7/2020/06/04/mico-leao-dourado-1591308447765_v2_900x506.jpg.webp',
        'url_da_imagem_2',
        'url_da_imagem_3',
        // Adicione mais URLs de imagem conforme necessário
      ];




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
                <p>Somos um projeto com o incentivo para a realização de denúncias contra maus tratos a animais silvestres e domésticos e denúncias contra a depredação do meio ambiente.</p>
            </div>

            
            <div className='carousel'>
            <Carousel images={images} />
            </div>
            
            
            
            
            
            
            
            
         

        </div>
        
    )
}

export default Home
