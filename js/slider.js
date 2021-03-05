'use strict'


const SPACE_KEY= 'Space';
const LEFT_ARROW_KEY = 'ArrowLeft';
const RIGHT_ARROW_KEY = 'ArrowRight';

const slides =
[
    { image: 'images/1.jpg', legend: 'Street Art'          },
    { image: 'images/2.jpg', legend: 'Fast Lane'           },
    { image: 'images/3.jpg', legend: 'Colorful Building'   },
    { image: 'images/4.jpg', legend: 'Skyscrapers'         },
    { image: 'images/5.jpg', legend: 'City by night'       },
    { image: 'images/6.jpg', legend: 'Tour Eiffel la nuit' }
];

let state;

function onSliderGoToNext()
{
    
    state.index++;
 
    if(state.index == slides.length){
        
        state.index = 0;
    }   
   
    refreshSlider()
}

function onSliderGoToPrevious()
{
    
    state.index--;
    
    if(state.index < 0) {
        
        state.index = slides.length - 1;
    }   
    
    refreshSlider()
}

function onSliderGoToRandom()
{
    let index;
    
    
    do{
        
         index = getRandomInteger(0, slides.length - 1);
    }while(index == state.index)
    
    state.index = index;
    
    refreshSlider();
}

function onSliderKeyUp(event)
{
       switch(event.code){
        case RIGHT_ARROW_KEY:
       
        onSliderGoToNext();
        break;

        case SPACE_KEY:
        
        onSliderToggle();
        break;

        case LEFT_ARROW_KEY:
        
        onSliderGoToPrevious();
        break;
    }
     
}

function onSliderToggle()
{
    
    const icon = document.querySelector('#slider-toggle i');

    icon.classList.toggle('fa-play');
    icon.classList.toggle('fa-pause');
    
    
  
    if(state.timer == null) {  
        
        state.timer = window.setInterval(onSliderGoToNext, 2000);
        
         this.title = 'Arrêter le carrousel';
   
    }else{
      
        window.clearInterval(state.timer);
       
        state.timer = null;
        
        this.title = 'Démarrer le carrousel';
    }    
}

function onToolbarToggle()
{
    
    const icon = document.querySelector('#toolbar-toggle i');

    icon.classList.toggle('fa-arrow-down');
    icon.classList.toggle('fa-arrow-right');
    
    document.querySelector('.toolbar ul').classList.toggle('hide');
}

function refreshSlider()
{
    
    const sliderImage  = document.querySelector('#slider img');
    const sliderLegend = document.querySelector('#slider figcaption');
    
    sliderImage.src          = slides[state.index].image;
    sliderLegend.textContent = slides[state.index].legend;
}

 document.addEventListener('DOMContentLoaded', function() {

    state = {
  
        index: 0,
    
        timer: null
    }

    installEventHandler('#slider-random', 'click', onSliderGoToRandom);
    installEventHandler('#slider-previous', 'click', onSliderGoToPrevious);
    installEventHandler('#slider-next', 'click', onSliderGoToNext);
    installEventHandler('#slider-toggle', 'click', onSliderToggle);
    installEventHandler('#toolbar-toggle', 'click', onToolbarToggle);
    
     document.addEventListener('keyup', onSliderKeyUp);
    
    refreshSlider()
})
