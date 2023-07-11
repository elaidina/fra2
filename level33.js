document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Dad came to catch us in his car.'
    },
    {
      name: '1',
      img: 'Papa est venu nous chercher dans sa voiture."'
    },
    {
      name: '2',
      img: 'He put us in our safety seats and fastened our safety belts.'
    },
    {
      name: '2',
      img: 'Il nous a mis dans nos sièges de sécurité et a attaché nos ceintures de sécurité.'
    },
    {
      name: '3',
      img: 'Have you enjoyed yourselves?'
    },
    {
      name: '3',
      img: 'Vous êtes-vous amusé ?'
    },
    {
      name: '4',
      img: 'I saved Tom´s life.'
    },
    {
      name: '4',
      img: "J'ai sauvé la vie de Tom."
    },
    {
      name: '5',
      img: 'Well done.'
    },
    {
      name: '5',
      img: 'Bien fait.'
    },
    {
      name: '6',
      img: 'Now turn the page.'
    },
    {
      name: '6',
      img: 'Maintenant, tournez la page.'
    },
    {
      name: '7',
      img: 'Help me solve the puzzle.'
    },
    {
      name: '7',
      img: 'Aidez-moi à résoudre le puzzle.'
    },
    {
      name: '8',
      img: 'Point to the things that could be dangerous.'
    },
    {
      name: '8',
      img: 'Montrez les choses qui pourraient être dangereuses.'
    },
    {
      name: '9',
      img: 'This is a haunted house.'
    },
    {
      name: '9',
      img: "C'est une maison hantée."
    },
    {
      name: '10',
      img: 'Once there was a girl.'
    },
    {
      name: '10',
      img: 'Il était une fois une fille.'
    },
    {
      name: '11',
      img: 'She went to live in this big old house.'
    },
    {
      name: '11',
      img: 'Elle est allée vivre dans cette grande vieille maison.'
    },
    {
      name: '12',
      img: 'It was a splendid place.'
    },
    {
      name: '12',
      img: "C'était un endroit magnifique."
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level34.html'> Continue to next level </a>";


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
