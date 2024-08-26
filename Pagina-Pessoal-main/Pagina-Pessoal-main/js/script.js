function googleTranslateElementInit() {
  // Initialize the Google Translate API
  google.translate.load('en');
}

function translateText(language) {
  // Get the text to translate
  var text = document.getElementById('texto').value;
  
  // Translate the text using the Google Translate API
  google.translate(text, language, function(result) {
    // Display the translated text
    document.getElementById('translated-text').innerHTML = result;
  });
}