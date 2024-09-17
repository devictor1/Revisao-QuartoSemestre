function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'pt',
    layout: google.translate.TranslateElement.VerticalLayout,
    autoDisplay: true
  }, 'google-translate-element');
}
document.addEventListener('DOMContentLoaded', googleTranslateElementInit);