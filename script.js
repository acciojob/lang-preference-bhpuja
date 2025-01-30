//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const selectedLanguageText = document.querySelector("#selectedLanguage span");

    // Load saved language from Session Storage
    const savedLanguage = sessionStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        languageSelector.value = savedLanguage;
        selectedLanguageText.textContent = languageSelector.options[languageSelector.selectedIndex].text;
    }

    // Save language selection to Session Storage
    languageSelector.addEventListener("change", function () {
        sessionStorage.setItem("preferredLanguage", languageSelector.value);
        selectedLanguageText.textContent = languageSelector.options[languageSelector.selectedIndex].text;
    });
});
