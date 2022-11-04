(function(){

  const sliders = [...document.querySelectorAll('.comentarios__body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click', ()=>{
    changePosition(1);
  });

  buttonBefore.addEventListener('click', ()=>{
    changePosition(-1);
  });

  const changePosition = (add)=>{
    const currentComentario = document.querySelector('.comentarios__body--show').dataset.id;
    value = Number(currentComentario);
    value+= add;
    
    sliders[Number(currentComentario)-1].classList.remove('comentarios__body--show')
    if(value === sliders.length+1 || value === 0){
      value = value === 0 ? sliders.length : 1;
    }

    sliders[value-1].classList.add('comentarios__body--show');


  }

})();