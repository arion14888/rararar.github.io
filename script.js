function toggleMenu() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}
document.addEventListener('click', function(event) {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menu-icon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
      }
});
function copyText(textToCopy, popupText, containerId, popupTextId) {
navigator.clipboard.writeText(textToCopy).then(() => {
  const popupContainer = document.getElementById(containerId);
  const popupTextField = document.getElementById(popupTextId);
    popupTextField.textContent = popupText;
    popupContainer.style.display = 'flex';
});
}
function closePopup(containerId) {
const popupContainer = document.getElementById(containerId);
popupContainer.style.display = 'none';
}
