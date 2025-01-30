//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const selectedLanguageText = document.querySelector("#selectedLanguage span");

    function updateLanguageText(language) {
        const languageNames = {
            en: "English",
            es: "Spanish",
            fr: "French",
            de: "German"
        };
        selectedLanguageText.textContent = languageNames[language] || "English";
    }

    // Check Session Storage for saved language
    const savedLanguage = sessionStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        languageSelector.value = savedLanguage;
        updateLanguageText(savedLanguage);
    } else {
        updateLanguageText(languageSelector.value);
    }

    // Save language selection and update display
    languageSelector.addEventListener("change", function () {
        sessionStorage.setItem("preferredLanguage", languageSelector.value);
        updateLanguageText(languageSelector.value);
    });
});
