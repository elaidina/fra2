document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'But the girl wasn´t just a girl.'
    },
    {
      name: '1',
      img: "Mais la fille n'était pas qu'une fille."
    },
    {
      name: '2',
      img: 'She was a witch.'
    },
    {
      name: '2',
      img: "C'était une sorcière."
    },
    {
      name: '3',
      img: 'She knew how to catch ghosts.'
    },
    {
      name: '3',
      img: 'Elle savait comment attraper les fantômes.'
    },
    {
      name: '4',
      img: 'I hope there are some more!'
    },
    {
      name: '4',
      img: "J'espère qu'il y en a d'autres !"
    },
    {
      name: '5',
      img: 'She carried on until she had caught all the ghosts in the house.'
    },
    {
      name: '5',
      img: "Elle a continué jusqu'à ce qu'elle ait attrapé tous les fantômes de la maison."
    },
    {
      name: '6',
      img: 'Then she went to the kitchen.'
    },
    {
      name: '6',
      img: "Puis elle est allée à la cuisine."
    },
    {
      name: '7',
      img: 'She put them all in the washing machine.'
    },
    {
      name: '7',
      img: "Elle les a tous mis dans la machine à laver."
    },
    {
      name: '8',
      img: 'When they were clean she hung them out in the garden.'
    },
    {
      name: '8',
      img: "Quand ils étaient propres, elle les étendait dans le jardin."
    },
    {
      name: '9',
      img: 'It was fine weather for drying.'
    },
    {
      name: '9',
      img: "Il faisait beau temps pour le séchage."
    },
    {
      name: '10',
      img: 'After drying, most of the ghosts became nice curtains.'
    },
    {
      name: '10',
      img: 'Après séchage, la plupart des fantômes sont devenus de jolis rideaux.'
    },
    {
      name: '11',
      img: 'One of them made a good tablecloth.'
    },
    {
      name: '11',
      img: "L'un d'eux a fait une bonne nappe."
    },
    {
      name: '12',
      img: 'They were all very useful.'
    },
    {
      name: '12',
      img: 'Ils ont tous été très utiles.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level35.html'> Continue to next level </a>";


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
