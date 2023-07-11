document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It was nearly time for tea, so they all went indoors to wash their hands.'
    },
    {
      name: '1',
      img: "C'était presque l'heure du thé, alors ils sont tous rentrés pour se laver les mains."
    },
    {
      name: '2',
      img: 'Tom undid the stair gate and Josie helped her sister to climb the stairs.'
    },
    {
      name: '2',
      img: "Tom a défait la porte d'escalier et Josie a aidé sa sœur à monter les escaliers."
    },
    {
      name: '3',
      img: 'I made sure that the water was not too hot.'
    },
    {
      name: '3',
      img: "Je me suis assuré que l'eau n'était pas trop chaude."
    },
    {
      name: '4',
      img: 'We all washed our hands.'
    },
    {
      name: '4',
      img: 'Nous nous sommes tous lavé les mains.'
    },
    {
      name: '5',
      img: 'I wanted to look out of the bathroom window.'
    },
    {
      name: '5',
      img: 'Je voulais regarder par la fenêtre de la salle de bain.'
    },
    {
      name: '6',
      img: 'Be careful, please.'
    },
    {
      name: '6',
      img: "Faites attention s'il vous plait."
    },
    {
      name: '7',
      img: 'It is not safe to lean out of windows.'
    },
    {
      name: '7',
      img: "Il n'est pas prudent de se pencher par les fenêtres."
    },
    {
      name: '8',
      img: 'I wasn´t going to.'
    },
    {
      name: '8',
      img: "Je n'allais pas."
    },
    {
      name: '9',
      img: 'Tom ran out of the bathroom and held the door shut.'
    },
    {
      name: '9',
      img: 'Tom est sorti en courant de la salle de bain et a tenu la porte fermée.'
    },
    {
      name: '10',
      img: 'Let me out, Tom.'
    },
    {
      name: '10',
      img: 'Laisse-moi sortir, Tom.'
    },
    {
      name: '11',
      img: 'It is dangerous to play with doors.'
    },
    {
      name: '11',
      img: "C'est dangereux de jouer avec les portes."
    },
    {
      name: '12',
      img: 'Someone´s fingers could get trapped.'
    },
    {
      name: '12',
      img: "Les doigts de quelqu'un pourraient se coincer."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 31 completed!</h2><a href='https://elaidina.github.io/fra2/level32.html'> Continue to Level 32</a>";


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
