// Variable

let generateButton = document.querySelector('.cta')
let colorBox = document.querySelector('.color-box')
let simpleButton = document.querySelector('#simple')
let complexButton = document.querySelector('#complex')
let r = ''
let g = ''
let b = ''
let colors = ['red', 'lightblue', 'yellow', 'coral', 'beige']
let stateDisplay = document.querySelector('.state')
let state = 'complex'

//Simple or complex

stateDisplay.textContent = `State selected: ${state}`

simpleButton.addEventListener('click', () => {
  state = 'simple'
  stateDisplay.textContent = `State selected: ${state}`
})


complexButton.addEventListener('click', () => {
  state = 'complex'
  stateDisplay.textContent = `State selected: ${state}`
})

//Function

const generateNumber = () => {
  return Math.floor(Math.random() * 256)
}

const generateColor = () => {
  r = generateNumber()
  g = generateNumber()
  b = generateNumber()
  return `${r}, ${g}, ${b} `
}

const generateColorEasy = () => {
  let number = Math.floor(Math.random() * colors.length)
  return colors[number]
}

//Main function

generateButton.addEventListener('click', () => {
  if (state === 'complex') {
    let rgbValue = generateColor()
    generateButton.textContent = `${state}, ${rgbValue} `
    colorBox.style.backgroundColor = `rgb(${rgbValue})`
  }

  else if (state === 'simple') {
    colorBox.style.backgroundColor = generateColorEasy()
    generateButton.textContent = `${state}, ${colorBox.style.backgroundColor} `
  }
})



// 


