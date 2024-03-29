document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It was time for Tom to go shopping.'
    },
    {
      name: '1',
      img: "Il était temps pour Tom d'aller faire du shopping."
    },
    {
      name: '2',
      img: 'While I was sitting in the waiting room, she was reading comics.'
    },
    {
      name: '2',
      img: "Pendant que j'étais assis dans la salle d'attente, elle lisait des bandes dessinées."
    },
    {
      name: '3',
      img: 'The door opened and out came the president.'
    },
    {
      name: '3',
      img: "La porte s'est ouverte et le président est sorti."
    },
    {
      name: '4',
      img: 'Tom smiled to me.'
    },
    {
      name: '4',
      img: "Tom m'a souri."
    },
    {
      name: '5',
      img: 'Why do you have to wear a brace on your teeth?'
    },
    {
      name: '5',
      img: "Pourquoi dois-tu porter un appareil dentaire sur tes dents ?"
    },
    {
      name: '6',
      img: 'To make my teeth straight.'
    },
    {
      name: '6',
      img: 'Pour me faire les dents droites.'
    },
    {
      name: '7',
      img: 'Laura is ready to see you now.'
    },
    {
      name: '7',
      img: 'Laura est prête à vous voir maintenant.'
    },
    {
      name: '8',
      img: 'This is a nice clean smell.'
    },
    {
      name: '8',
      img: "C'est une bonne odeur de propreté."
    },
    {
      name: '9',
      img: 'Who wants to go first?'
    },
    {
      name: '9',
      img: 'Qui veut aller en premier?'
    },
    {
      name: '10',
      img: 'Tom climbed into the dentist´s chair.'
    },
    {
      name: '10',
      img: 'Tom est monté dans le fauteuil du dentiste.'
    },
    {
      name: '11',
      img: 'Mrs White pressed a button and the chair tilted back.'
    },
    {
      name: '11',
      img: "Mme White a appuyé sur un bouton et la chaise s'est inclinée vers l'arrière."
    },
    {
      name: '12',
      img: 'Tom felt like a rocket pilot.'
    },
    {
      name: '12',
      img: 'Tom se sentait comme un pilote de fusée.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level38.html'> Continue to next level </a>";


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
