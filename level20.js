document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I would like to pick som flowers for my mum.'
    },
    {
      name: '1',
      img: 'Je voudrais cueillir des fleurs pour ma mère.'
    },
    {
      name: '2',
      img: 'The apples are ripe and round.'
    },
    {
      name: '2',
      img: 'Les pommes sont mûres et rondes.'
    },
    {
      name: '3',
      img: 'I found a lot of presents under the Christmas tree.'
    },
    {
      name: '3',
      img: "J'ai trouvé beaucoup de cadeaux sous le sapin de Noël."
    },
    {
      name: '4',
      img: 'I don ´t like ironing.'
    },
    {
      name: '4',
      img: "Je n'aime pas repasser."
    },
    {
      name: '5',
      img: 'I am too busy today.'
    },
    {
      name: '5',
      img: "Je suis trop occupé aujourd'hui."
    },
    {
      name: '6',
      img: 'Look around you.'
    },
    {
      name: '6',
      img: 'Regarde autour de toi.'
    },
    {
      name: '7',
      img: 'How many interesting things can you see?'
    },
    {
      name: '7',
      img: 'Combien de choses intéressantes peux-tu voir?'
    },
    {
      name: '8',
      img: 'I know lots of people, animals, houses, trees and flowers.'
    },
    {
      name: '8',
      img: "Je connais beaucoup de gens, d'animaux, de maisons, d'arbres et de fleurs."
    },
    {
      name: '9',
      img: 'But do you know everything?'
    },
    {
      name: '9',
      img: 'Mais tu sais tout ?'
    },
    {
      name: '10',
      img: 'Nobody knows everything.'
    },
    {
      name: '10',
      img: 'Personne ne sait tout.'
    },
    {
      name: '11',
      img: 'Some adults know a lot of songs for children.'
    },
    {
      name: '11',
      img: 'Certains adultes connaissent beaucoup de chansons pour enfants.'
    },
    {
      name: '12',
      img: 'Some people cannot repair cars.'
    },
    {
      name: '12',
      img: 'Certaines personnes ne peuvent pas réparer les voitures.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 20 completed!</h2><a href='https://elaidina.github.io/fra2/level21.html'> Continue to Level 21</a>";


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
