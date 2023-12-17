document.body.onload = ()=>{
    wordInput();
}
var wordsCounter = null
var words = null
var wordElement = null
var wordPrintElement = null



function wordInput(){
    wordElement = document.getElementById('container');
    let submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", ()=>{
        wordsCounter = wordsOperations(wordElement.innerText);
        printWordCount();
        // wordElement.addEventListener('input', handleInput);
    })
}


function wordsOperations(x){
    words = x.trim().split(/\s+/).filter(word => word!= '');
    return words.length
}

function printWordCount(){

    wordPrintElement = document.getElementById('outer span')
    wordPrintElement.innerHTML = wordsCounter;
    findLongestWord();
}

function findLongestWord(){
    const longestWord = words.reduce((longest,current)=>{
        return current.length > longest.length ? current:longest;
    }, "");
    highlightLongestWord(longestWord);
}

function highlightLongestWord(longestWord) {
    const text = wordElement.innerText;
    let highlightedText = text.replace(
      new RegExp(longestWord, 'g'),
      `<span class="highlight">${longestWord}</span>`
    );
    // console.log(words)
    if(longestWord == words[words.length-1])
    {
        highlightedText+="&nbsp"
    }
    wordElement.innerHTML = highlightedText;
  }
  
  function handleInput() {
    findLongestWord();
  }