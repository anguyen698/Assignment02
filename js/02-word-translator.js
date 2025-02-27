let languageCode = prompt('Select a language code ("es", "de", "en", and "fr")').toLowerCase()

if (languageCode === "es") {
    window.console.log("Hello World translated in Spanish is: Hola Mundo")
} else if (languageCode === "de") {
    window.console.log("Hello World translated in German is: Hallo Welt")
} else if (languageCode === "fr") {
    window.console.log("Hello World translated in French is: Bonjour le Monde")
} else {
    window.console.log("Hello World translated in English is: Hello World")
}
