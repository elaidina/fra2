document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'As soon as he got home, he tried out his new toothbrush.'
    },
    {
      name: '1',
      img: "Dès qu'il est rentré chez lui, il a essayé sa nouvelle brosse à dents."
    },
    {
      name: '2',
      img: 'Michelle was very excited.'
    },
    {
      name: '2',
      img: "Michelle était très excitée."
    },
    {
      name: '3',
      img: 'It would soon be Christmas, so she wrote her wishes.'
    },
    {
      name: '3',
      img: "Ce serait bientôt Noël, alors elle a écrit ses voeux."
    },
    {
      name: '4',
      img: 'We put on our hats, coats, scarves and gloves because it was cold outside.'
    },
    {
      name: '4',
      img: "Nous avons mis nos chapeaux, nos manteaux, nos écharpes et nos gants car il faisait froid dehors."
    },
    {
      name: '5',
      img: 'There were lots of families choosing Christmas trees at the Garden Centre.'
    },
    {
      name: '5',
      img: "Il y avait beaucoup de familles qui choisissaient des sapins de Noël au Garden Centre."
    },
    {
      name: '6',
      img: 'Which tree shall we get?'
    },
    {
      name: '6',
      img: "Quel arbre allons-nous prendre ?"
    },
    {
      name: '7',
      img: 'I like that one because it is really big.'
    },
    {
      name: '7',
      img: "J'aime celui-là parce qu'il est vraiment grand."
    },
    {
      name: '8',
      img: 'It is too big to fit in our car.'
    },
    {
      name: '8',
      img: "C'est trop grand pour tenir dans notre voiture."
    },
    {
      name: '9',
      img: 'They agreed on a very nice smaller tree.'
    },
    {
      name: '9',
      img: "Ils se sont mis d'accord sur un très bel arbre plus petit."
    },
    {
      name: '10',
      img: 'Dad fetched a trolley for the tree.'
    },
    {
      name: '10',
      img: "Papa est allé chercher un chariot pour l'arbre."
    },
    {
      name: '11',
      img: 'The kids helped to push the troley.'
    },
    {
      name: '11',
      img: "Les enfants ont aidé à pousser le chariot."
    },
    {
      name: '12',
      img: 'They could choose two new tree decorations.'
    },
    {
      name: '12',
      img: "Ils pourraient choisir deux nouvelles décorations d'arbres."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level43.html'> Continue to next level </a>";


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
