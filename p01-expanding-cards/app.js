const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removePanelsActive()
    panel.classList.add('active')
  })
})

function removePanelsActive() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
