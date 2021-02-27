function getRandomLetter() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return letters.substr(Math.floor(Math.random() * letters.length -1), 1)
}