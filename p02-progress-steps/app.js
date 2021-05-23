const progress = document.querySelector('#progress')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')

let currentCircle = 1

next.addEventListener('click', () => {
  if (currentCircle < circles.length) {
    currentCircle++
  }
  update()
})

prev.addEventListener('click', () => {
  if (currentCircle > 1) {
    currentCircle--
  }
  update()
})

function update() {
  updateCircles()
  updateLine()
  updateButtons()
}

function updateCircles() {
  circles.forEach((circle, index) => {
    if (index < currentCircle) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })
}

function updateLine() {
  const actives = document.querySelectorAll('.active')
  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`
}

function updateButtons() {
  if (currentCircle === 1) {
    prev.disabled = true
  } else if (currentCircle === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
