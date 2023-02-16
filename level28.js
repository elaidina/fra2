document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Before anyone could stop me, I went home.'
    },
    {
      name: '1',
      img: "Avant que quelqu'un ne puisse m'arrêter, je suis rentré chez moi."
    },
    {
      name: '2',
      img: 'They could not find me anywhere.'
    },
    {
      name: '2',
      img: "Ils ne pouvaient pas me trouver n'importe où."
    },
    {
      name: '3',
      img: 'When we reached the new house, we felt miserable.'
    },
    {
      name: '3',
      img: "Quand nous sommes arrivés dans la nouvelle maison, nous nous sommes sentis misérables."
    },
    {
      name: '4',
      img: 'I´ve just had a bright idea!'
    },
    {
      name: '4',
      img: "Je viens d'avoir une idée brillante !"
    },
    {
      name: '5',
      img: 'One on my laces came undone and I trod on it.'
    },
    {
      name: '5',
      img: "Un de mes lacets s'est défait et j'ai marché dessus."
    },
    {
      name: '6',
      img: 'I had to tie my laces properly.'
    },
    {
      name: '6',
      img: "Je devais faire mes lacets correctement."
    },
    {
      name: '7',
      img: 'He drove away in the car.'
    },
    {
      name: '7',
      img: 'Il est parti en voiture.'
    },
    {
      name: '8',
      img: 'Mummy was not very pleased with me.'
    },
    {
      name: '8',
      img: "Maman n'était pas très contente de moi."
    },
    {
      name: '9',
      img: 'There was such a lot to do.'
    },
    {
      name: '9',
      img: 'Il y avait tellement de choses à faire.'
    },
    {
      name: '10',
      img: 'Let´s go and climb that tree.'
    },
    {
      name: '10',
      img: 'Allons grimper à cet arbre.'
    },
    {
      name: '11',
      img: 'That night, I slept in my new bedroom for the first time.'
    },
    {
      name: '11',
      img: "Cette nuit-là, j'ai dormi dans ma nouvelle chambre pour la première fois."
    },
    {
      name: '12',
      img: 'Soon I was asleep in my new home.'
    },
    {
      name: '12',
      img: "Bientôt, je me suis endormi dans ma nouvelle maison."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 28 completed!</h2><a href='https://elaidina.github.io/fra2/level29.html'> Continue to Level 29</a>";


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
