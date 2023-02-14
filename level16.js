document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are looking forward to see their grandma.'
    },
    {
      name: '1',
      img: 'Ils sont impatients de voir leur grand-mère.'
    },
    {
      name: '2',
      img: 'Her village is not far from the town.'
    },
    {
      name: '2',
      img: "Son village n'est pas loin de la ville."
    },
    {
      name: '3',
      img: 'We are coming along with them.'
    },
    {
      name: '3',
      img: 'Nous les accompagnons.'
    },
    {
      name: '4',
      img: 'Can you wait for us?'
    },
    {
      name: '4',
      img: 'Peux-tu nous attendre?'
    },
    {
      name: '5',
      img: 'I must ask everyone.'
    },
    {
      name: '5',
      img: 'Je dois demander à tout le monde.'
    },
    {
      name: '6',
      img: 'We will be going through the town.'
    },
    {
      name: '6',
      img: 'Nous traverserons la ville.'
    },
    {
      name: '7',
      img: 'We will be able to see lots of cars, shops and big houses.'
    },
    {
      name: '7',
      img: 'Nous pourrons voir beaucoup de voitures, de magasins et de grandes maisons.'
    },
    {
      name: '8',
      img: 'There are lots of people in the streets.'
    },
    {
      name: '8',
      img: 'Il y a beaucoup de monde dans les rues.'
    },
    {
      name: '9',
      img: 'Show me the way, please.'
    },
    {
      name: '9',
      img: "Montrez-moi le chemin, s'il vous plaît."
    },
    {
      name: '10',
      img: "Go straight and then turn left."
    },
    {
      name: '10',
      img: 'Allez tout droit puis tournez à gauche.'
    },
    {
      name: '11',
      img: "Turn right at the giant bridge."
    },
    {
      name: '11',
      img: 'Tournez à droite au pont géant.'
    },
    {
      name: '12',
      img: 'There´s my favourite shop on the right and a church on the left.'
    },
    {
      name: '12',
      img: 'Il y a mon magasin préféré sur la droite et une église sur la gauche.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 16 completed!</h2><a href="https://elaidina.github.io/fra2/level17.html"> Continue to Level 17</a>'


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
