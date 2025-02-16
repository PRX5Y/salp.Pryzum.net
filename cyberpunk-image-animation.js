const numAcronyms = 8;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const updateAcronyms = () => {
  const acrElements = document.querySelectorAll('#acr');
  acrElements.forEach(acr => {
    const words = acr.textContent.split(' ');
    // shuffle the array of words
    const shuffledWords = shuffleArray(words);
    const newContent = shuffledWords.slice(0, numAcronyms).join(' ');
    acr.textContent = newContent;
  });
}

setInterval(updateAcronyms, 50);