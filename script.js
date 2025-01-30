//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");

    // Load saved language from Session Storage
    const savedLanguage = sessionStorage.getItem("preferredLanguage");
    if (savedLanguage) {
        languageSelector.value = savedLanguage;
    }

    // Save language selection to Session Storage
    languageSelector.addEventListener("change", function () {
        sessionStorage.setItem("preferredLanguage", languageSelector.value);
    });
});
