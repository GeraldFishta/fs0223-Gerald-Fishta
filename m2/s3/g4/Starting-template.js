
let card = document.getElementsByClassName('card');
let cardsArray = [...card];
const loadImagesButton = document.getElementById('load-images');
const loadSecondaryImagesButton = document.getElementById('load-secondary-images');

loadImagesButton.addEventListener('click', () => {

fetch('https://api.pexels.com/v1/search?query=Nature', {
  headers: {
    Authorization: 'LJPG30hSUDtKBI5JESCA24GdRtKJ4X7wqPuCSY1hBPzFxDRVPT11IoWI'
  }
})
.then(response => response.json())
.then((photos) => {

  console.log(photos.photos);

  cardsArray.forEach((element, i) => {
    console.log('sono dentro al for');
     element.firstElementChild.remove() 
     let newImg = document.createElement('img')
     newImg.style.objectFit = 'cover';
     newImg.height = "225"
     newImg.src = photos.photos[i].src.landscape
     cardsArray[i].prepend(newImg)
    })
    })
    
      .catch((error) => {
      console.error(error);
    });
  })
  
loadSecondaryImagesButton.addEventListener('click', () => {

  fetch('https://api.pexels.com/v1/search?query=People', {
    headers: {
      Authorization: 'LJPG30hSUDtKBI5JESCA24GdRtKJ4X7wqPuCSY1hBPzFxDRVPT11IoWI'
    }
  })
  .then(response => response.json())
  .then((photos) => {
  
    console.log(photos.photos);
  
    cardsArray.forEach((element, i) => {
      console.log('sono dentro al for');
       element.firstElementChild.remove() 
       let newImg = document.createElement('img')
       newImg.style.objectFit = 'cover';
       newImg.height = "225"
       newImg.src = photos.photos[i].src.landscape
       cardsArray[i].prepend(newImg)
      })
      })
      
        .catch((error) => {
        console.error(error);
      });
    })

let buttonHide = document.querySelectorAll('.btn-group button:nth-child(2)')
console.log(buttonHide)

buttonHide.forEach((element) => {
  element.innerHTML = 'Hide'
  element.addEventListener('click', () =>{
    element.closest('.col-md-4').remove()
  })
})



