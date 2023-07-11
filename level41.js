document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'On the way home they passed a sweet shop.'
    },
    {
      name: '1',
      img: 'Sur le chemin du retour, ils sont passés devant une confiserie.'
    },
    {
      name: '2',
      img: 'I would like some sweets but I don´t want toothache like Tom.'
    },
    {
      name: '2',
      img: 'Je voudrais des bonbons mais je ne veux pas avoir mal aux dents comme Tom.'
    },
    {
      name: '3',
      img: 'There are other tasty things that are better for you.'
    },
    {
      name: '3',
      img: "Il y a d'autres choses savoureuses qui sont meilleures pour vous."
    },
    {
      name: '4',
      img: 'So they bought two crunchy apples from the greengrocer.'
    },
    {
      name: '4',
      img: 'Alors ils ont acheté deux pommes croquantes chez le marchand de légumes.'
    },
    {
      name: '5',
      img: 'Then they went to the chemist´s to buy new toothbrushes.'
    },
    {
      name: '5',
      img: 'Ensuite, ils sont allés à la pharmacie pour acheter de nouvelles brosses à dents.'
    },
    {
      name: '6',
      img: 'The chemist told them about disclosing tablets.'
    },
    {
      name: '6',
      img: '"Le chimiste leur a parlé de comprimés à divulguer."'
    },
    {
      name: '7',
      img: 'Just chew half a tablet, then rinse your mouth with water.'
    },
    {
      name: '7',
      img: "Il suffit de mâcher un demi-comprimé, puis de se rincer la bouche avec de l'eau."
    },
    {
      name: '8',
      img: 'He explained.'
    },
    {
      name: '8',
      img: 'Il expliqua.'
    },
    {
      name: '9',
      img: 'The parts of your teeth that most need cleaning will turn pink.'
    },
    {
      name: '9',
      img: "Les parties de vos dents qui ont le plus besoin d'être nettoyées deviendront roses."
    },
    {
      name: '10',
      img: 'We would look funny going to playground with pink teeth.'
    },
    {
      name: '10',
      img: "On aurait l'air drôle d'aller au terrain de jeux avec des dents roses."
    },
    {
      name: '11',
      img: 'The chemist laughed.'
    },
    {
      name: '11',
      img: 'Le chimiste a ri.'
    },
    {
      name: '12',
      img: 'When there is no pink left, you know your teeth are clean.'
    },
    {
      name: '12',
      img: "Quand il n'y a plus de rose, vous savez que vos dents sont propres."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level42.html'> Continue to next level </a>";


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
