document.getElementById(
  'character-name'
).innerHTML = `Let's do this ${localStorage.getItem('characterName')}`;

// Functions

const addTask = () => {
  const task = document.createElement('li');
  const input = document.getElementById('task');
  if (input.value === '') {
    alert('Input a valid task');
  } else {
    var inputtedTask = document.createTextNode(input.value);
    task.appendChild(inputtedTask);
    document.getElementById('list').appendChild(task);
    const savedLists = Array.from(document.querySelectorAll('li')).map((a) => {
      return a.textContent;
    });
    window.localStorage.setItem('todo', savedLists);
    input.value = '';
  }
};
