document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'And don´t eat or drink in bed.'
    },
    {
      name: '1',
      img: 'Et ne mangez pas et ne buvez pas au lit.'
    },
    {
      name: '2',
      img: 'Not even water?'
    },
    {
      name: '2',
      img: "Pas même de l'eau ?"
    },
    {
      name: '3',
      img: 'Only water.'
    },
    {
      name: '3',
      img: "Seulement de l'eau."
    },
    {
      name: '4',
      img: 'Sweet drinks can hurt your teeth as much as sweet food.'
    },
    {
      name: '4',
      img: "Les boissons sucrées peuvent blesser vos dents autant que les aliments sucrés."
    },
    {
      name: '5',
      img: 'Come back and see me soon.'
    },
    {
      name: '5',
      img: 'Reviens me voir bientôt.'
    },
    {
      name: '6',
      img: 'Before they went home the receptionist wrote down the date of their next visit.'
    },
    {
      name: '6',
      img: 'Avant de rentrer chez eux, la réceptionniste a noté la date de leur prochaine visite.'
    },
    {
      name: '7',
      img: 'The little boy was trying not to cry.'
    },
    {
      name: '7',
      img: 'Le petit garçon essayait de ne pas pleurer.'
    },
    {
      name: '8',
      img: 'What´s the matter, Tom?'
    },
    {
      name: '8',
      img: 'Quel est le problème, Tom?'
    },
    {
      name: '9',
      img: 'I´ve got toothache.'
    },
    {
      name: '9',
      img: "J'ai mal aux dents."
    },
    {
      name: '10',
      img: 'He eats too many sweets.'
    },
    {
      name: '10',
      img: 'Il mange trop de bonbons.'
    },
    {
      name: '11',
      img: 'Never mind.'
    },
    {
      name: '11',
      img: 'Pas grave.'
    },
    {
      name: '12',
      img: 'Mrs White will make it better.'
    },
    {
      name: '12',
      img: "Mme White va l'améliorer."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/fra2/level41.html'> Continue to next level </a>";


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
