document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Who is going to make bread?'
    },
    {
      name: '1',
      img: 'Qui va faire du pain?'
    },
    {
      name: '2',
      img: 'I´m going to eat this bread.'
    },
    {
      name: '2',
      img: 'Je vais manger ce pain.'
    },
    {
      name: '3',
      img: 'They are going to move house.'
    },
    {
      name: '3',
      img: 'Ils vont déménager.'
    },
    {
      name: '4',
      img: 'There is a lot of work to do.'
    },
    {
      name: '4',
      img: 'Il y a beaucoup de travail à faire.'
    },
    {
      name: '5',
      img: 'We must sort out the things we want to keep and the things we can throw away.'
    },
    {
      name: '5',
      img: "Il faut faire le tri entre les choses qu'on veut garder et celles qu'on peut jeter."
    },
    {
      name: '6',
      img: 'The kittens kept getting in the way.'
    },
    {
      name: '6',
      img: "Les chatons n'arrêtaient pas de gêner."
    },
    {
      name: '7',
      img: 'At last it was the day of the move.'
    },
    {
      name: '7',
      img: "Enfin c'était le jour du déménagement."
    },
    {
      name: '8',
      img: 'We watched the men packing things and putting them in the van.'
    },
    {
      name: '8',
      img: 'Nous avons regardé les hommes emballer des choses et les mettre dans la camionnette.'
    },
    {
      name: '9',
      img: 'It took a long time.'
    },
    {
      name: '9',
      img: 'Cela a pris beaucoup de temps.'
    },
    {
      name: '10',
      img: 'When the house was quite empty, we felt a bit sad.'
    },
    {
      name: '10',
      img: 'Quand la maison était assez vide, nous nous sentions un peu tristes.'
    },
    {
      name: '11',
      img: 'My brother carried the goldfish in their tank.'
    },
    {
      name: '11',
      img: 'Mon frère a transporté le poisson rouge dans son aquarium.'
    },
    {
      name: '12',
      img: 'The baby needed a cuddle.'
    },
    {
      name: '12',
      img: "Le bébé avait besoin d'un câlin."
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 27 completed!</h2><a href='https://elaidina.github.io/fra2/level28.html'> Continue to Level 28</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
