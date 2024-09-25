const textarea = document.getElementById('myTextarea');
const counter = document.getElementById('character-count');
const submitButton = document.getElementById('btn-submit');

  textarea.addEventListener('input', updateCharacterCount);
  textarea.addEventListener('input', autoResizeTextarea);

  function updateCharacterCount() {
    const maxCharacters = 512;
    const charactersRemaining = maxCharacters - textarea.value.length;
    counter.textContent = `Caracteres restantes: ${charactersRemaining}`;
    if (charactersRemaining < 0) {
      counter.style.color = 'red';
      submitButton.disabled = true;
    } else {
      counter.style.color = '';
      submitButton.disabled = false;
    }
    console.log;
  }

  function autoResizeTextarea() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }