function translateText(lang) {
    // Get all text elements on the page
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, span');
  
    // Loop through each text element and translate the text
    textElements.forEach((element) => {
      const text = element.textContent;
      const translation = google.translate.translate(text, lang);
  
      // Update the text element with the translated text
      element.textContent = translation;
    });
  }