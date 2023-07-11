document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Don´t fall.'
    },
    {
      name: '1',
      img: 'Ne tombe pas.'
    },
    {
      name: '2',
      img: 'Walk slowly.'
    },
    {
      name: '2',
      img: 'Marche doucement.'
    },
    {
      name: '3',
      img: 'My friends are making a snowman.'
    },
    {
      name: '3',
      img: 'Mes amis font un bonhomme de neige.'
    },
    {
      name: '4',
      img: 'My birthday is in winter.'
    },
    {
      name: '4',
      img: 'Mon anniversaire est en hiver.'
    },
    {
      name: '5',
      img: 'People have their birthday only once a year.'
    },
    {
      name: '5',
      img: "Les gens n'ont leur anniversaire qu'une fois par an."
    },
    {
      name: '6',
      img: 'It´s pitty.'
    },
    {
      name: '6',
      img: "C'est dommage."
    },
    {
      name: '7',
      img: 'My daughter was born on Thursday.'
    },
    {
      name: '7',
      img: 'Ma fille est née jeudi.'
    },
    {
      name: '8',
      img: 'Nobody knows why the cat is so fat.'
    },
    {
      name: '8',
      img: 'Personne ne sait pourquoi le chat est si gros.'
    },
    {
      name: '9',
      img: 'The little girl can button the sweater but she can´t zip the jacket up.'
    },
    {
      name: '9',
      img: 'La petite fille peut boutonner le pull mais elle ne peut pas fermer la veste. '
    },
    {
      name: '10',
      img: 'She likes playing with water in the bathroom.'
    },
    {
      name: '10',
      img: "Elle aime jouer avec de l'eau dans la salle de bain."
    },
    {
      name: '11',
      img: 'She washes her socks, shirt and pyjamas.'
    },
    {
      name: '11',
      img: 'Elle lave ses chaussettes, sa chemise et son pyjama.'
    },
    {
      name: '12',
      img: 'There´s a lot of water everywhere.'
    },
    {
      name: '12',
      img: "Il y a beaucoup d'eau partout."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 25 completed!</h2><a href='https://elaidina.github.io/fra2/level26.html'> Continue to Level 26</a>";


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
