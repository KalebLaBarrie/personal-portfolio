const startDateNumberText = document.getElementById('code-start-date');
const startDateNum = new Date().getFullYear() - 2016;
startDateNumberText.innerText = startDateNum;

const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);
