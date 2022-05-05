import React from "react";

export default function ListActs(props){

    function showImage(even,urlImg){
        const imagem = document.createElement('div');
        imagem.classList.add('show-image');
        imagem.style.backgroundImage = `url("${urlImg}")`;

        const closeImage = document.createElement('button');
        closeImage.classList.add('close-show-image');
        closeImage.innerHTML = 'X';

        const hideGround = document.createElement('div');
        hideGround.classList.add('hide-ground');

        closeImage.addEventListener('click',function(){
            imagem.parentNode.removeChild(imagem);
            hideGround.parentNode.removeChild(hideGround);
        });

        const title = document.createElement('h4');
        title.innerHTML = even.target.innerHTML;

        imagem.appendChild(title);
        imagem.appendChild(closeImage);

        const body = document.querySelector('body');
        body.appendChild(hideGround);
        body.appendChild(imagem);
    }

    return (
        <section>
            <h3>{props.titulo ? props.titulo : 'Dia sem nome'}</h3>
            <ul>
                {props.exercicios.map((exer,i) => {
                    return <li key={i} onClick={(event) => showImage(event,exer.url)} >★ {exer.nome}</li>
                })}
            </ul>
        </section>
    )
}