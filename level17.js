document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'We are approaching the forest.'
    },
    {
      name: '1',
      img: 'Nous approchons de la forêt.'
    },
    {
      name: '2',
      img: 'We can´t go by car into the forest.'
    },
    {
      name: '2',
      img: 'Nous ne pouvons pas aller en voiture dans la forêt.'
    },
    {
      name: '3',
      img: 'I like it here very much.'
    },
    {
      name: '3',
      img: 'Je me plais beaucoup ici.'
    },
    {
      name: '4',
      img: 'We can play in the meadow.'
    },
    {
      name: '4',
      img: 'Nous pouvons jouer dans le pré.'
    },
    {
      name: '5',
      img: 'Look, there´s a butterfly on that flower.'
    },
    {
      name: '5',
      img: 'Regarde, il y a un papillon sur cette fleur.'
    },
    {
      name: '6',
      img: 'Would you like to pick mushrooms and strawberries?'
    },
    {
      name: '6',
      img: 'Voulez-vous cueillir des champignons et des fraises?'
    },
    {
      name: '7',
      img: 'My friend lives in a house near the river.'
    },
    {
      name: '7',
      img: 'Mon ami vit dans une maison près de la rivière.'
    },
    {
      name: '8',
      img: "He plays with his dog every day."
    },
    {
      name: '8',
      img: 'Il joue avec son chien tous les jours.'
    },
    {
      name: '9',
      img: 'Do you sometimes watch horses and cows in the meadow?'
    },
    {
      name: '9',
      img: 'Regardez-vous parfois des chevaux et des vaches dans le pré?'
    },
    {
      name: '10',
      img: 'I´m afraid of that big dog.'
    },
    {
      name: '10',
      img: "J'ai peur de ce gros chien."
    },
    {
      name: '11',
      img: 'I want to show you something.'
    },
    {
      name: '11',
      img: 'Je veux te montrer quelque chose.'
    },
    {
      name: '12',
      img: 'Do you want to see out pig and piglets?'
    },
    {
      name: '12',
      img: 'Voulez-vous voir des cochons et des porcelets ?'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 17 completed!</h2><a href="https://elaidina.github.io/fra2/level18.html"> Continue to Level 18</a>';


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
