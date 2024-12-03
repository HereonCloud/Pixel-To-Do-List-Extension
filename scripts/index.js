document
  .getElementById('character-name-form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const characterName = document.getElementById('character-name');
    localStorage.setItem('characterName', characterName.value);
    window.location.href = './../character.html';
  });
