const btn = document.querySelector('#Dark-btn')
const CvBtn = document.querySelector('.btn')

btn.addEventListener('click', function() {

    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white'; 
        document.body.style.color = 'black'; 
   
    } else {
        document.body.style.backgroundColor = 'black'; 
        document.body.style.color = 'white';

    }

    if(backgroundColor === 'black'){
        document.style.color = 'red'
    }
});




