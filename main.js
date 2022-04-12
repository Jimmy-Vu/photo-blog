const wrapButton = document.querySelector('#flex-change-btn');
let contentSection = document.querySelector('.image-collection');

wrapButton.addEventListener('click', wrapChange);

function wrapChange(event) {
  if (contentSection.className === "flex-wrap display-flex image-collection") {
    contentSection.className = 'display-flex image-collection';
  }
  else {
    contentSection.className = 'flex-wrap display-flex image-collection';
  }
}
