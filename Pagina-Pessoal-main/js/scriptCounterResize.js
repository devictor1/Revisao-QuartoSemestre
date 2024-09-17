const textarea = document.getElementById('my-textarea');
const counter = document.getElementById('character-count');
const submitButton = document.getElementById('btn-submit');

  textarea.addEventListener('input', updateCharacterCount);
  textarea.addEventListener('input', resizeTextarea);

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

  function resizeTextarea() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }