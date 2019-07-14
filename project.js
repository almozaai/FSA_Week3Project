//project 3 

//Exercise 1
//keys takes object and returns their keys in an array.
function keys(obj){
    return Object.keys(obj)
  }  

console.log(keys({x: 1, y: 2}));//['x', 'y']

//Exercise 2
//values takes object and returns their values in an array.
function values(obj){
    return Object.values(obj)
  }

console.log(values({x: 1, y: 2}));//[1, 2]

//Exercise 3
//removeFirst takes an array and removes it's first entry and returns it. It mutates the array
function removeFirst(arr){
    return arr.shift()
  }

const arr = ['a', 'b', 'c']
const first = removeFirst(arr);
console.log(first);//a
console.log(arr);//['b', 'c']

//Exercise 4
//removeAt takes an array and an index and removes and returns the item at that index. It mutates the array 
function removeAt(arr,index){
    return arr.splice(index,1).join();
  }

const arr2 = ['d', 'e', 'f', 'g'];
console.log(removeAt(arr2, 2));//f
console.log(arr2);//['d', 'e', 'g']


//Exercise 5
//generateWordCounts returns a map of words and their counts. It ignores case and ignores when the characters !,?,:, or . follow the word
function generateWordCounts(text){
    const array = text.split(' ')
    const sampleLetter = ['.', ':', '!', '?']
    const newArray = array.map(word =>{
       sampleLetter.forEach(letter => {
        if(word.includes(letter)){
            word = word.replace(letter,'')
        }
      })
      return word.toLowerCase()
    })
    let result = newArray.reduce(function(p, c){
        if (c in p) {
           p[c]++;
        } else {
           p[c]=1;
        }
        return p;
    }, {});
        return result
}

const text = `A No Good Fox Story: A good blue fox. What a story! No?`;
const wordCounts = generateWordCounts(text);
console.log(wordCounts);//{ a: 3, no: 2, good: 2, fox: 2, story: 2, blue: 1, what: 1 }
//try to use map and reduce and includes and trim


//Exercise 6
//returns an object where the keys are vowels and the values are the counts of those vowels in the passed in array of words
function vowelCounts(arr){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let joinArr = arr.join('')
    let obj = {}
    for(let i = 0; i < vowels.length; i++){
      let count = 0
      for(let n = 0; n < joinArr.length; n++){
          if(joinArr[n] === vowels[i]){
            count ++
          }
      }
      obj[vowels[i]] = count 
    }
    return obj
}
const snacks = ['fruit', 'nuts', 'cheeze'];
console.log(vowelCounts(snacks));//{ a: 0, e: 3, i: 1, o: 0, u: 2 }

//Exercise 7
//is passed in an array of arrays. It returns the index of the shortest array. If there are no arrays in the array, it returns -1
function indexOfShortest(arr){
    let shortestLength = 10000;
    let index = -1
    arr.forEach(word => {
      if(Array.isArray(word) && word.length < shortestLength){
        shortestLength = word.length
        index = arr.indexOf(word)
      }
    })
    return index
}

console.log(indexOfShortest([
  [1, 2, 3],
  [1, 2],
  [1],
  [2, 2]
]));//2
console.log(indexOfShortest([]));//-1


//Exercise 8
//takes an array of objects and returns an array of names where the names are the name properties of the passed in object, but only when isManager of the object is true
function managerNames(arr){
    let array = arr.filter(obj => {return obj.isManager})
    let result = array.map(obj => {return obj.name})
    return result
}
console.log(managerNames([
  { id: 1, name: 'moe', isManager: true},
  { id: 2, name: 'larry', isManager: false},
  { id: 3, name: 'curly', isManager: true}
]));//['moe', 'curly'];


//Exercise 9
//cleanUpStory replaces the word bad (anywhere in a word) with three asterisks.
function cleanUpStory(cleanBadWord){
    let arr = cleanBadWord.split(' ')
    const sampleLetter = ['.', ':', '!', '?', "'","'", ","]
    const newArray = arr.map(word =>{
     sampleLetter.forEach(letter => {
       if(word.includes(letter)){
          word = word.replace(letter,'')
      }
    })
    return word.toLowerCase()
    })
    let replaceWord = newArray.map(word => {
      if(word === 'bad'){
        word = '***'
      }
      return word
    })
    return replaceWord.join(' ')
}

const badWordStory = `This is a bad story with bad words. If you see a word that contains the word bad, replace 'bad' with three asterisks.`;

console.log(cleanUpStory(badWordStory));//This is a *** story with *** words. If you see a word that contains the word ***, replace '***' with three asterisks.


//Exercise 10
//cleaned scores takes an array of arrays. It returns a new array but filters out empty arrays or arrays which only contain zeros.
function cleanScores(scores){
    const cleanScoresArr = scores.filter(scorsArr => {
      let totalArr = scorsArr.reduce(function (a,b) {
        return a + b;
      }, 0)
      return (totalArr > 0 && scorsArr.length > 0)
    })
    return cleanScoresArr
}

const scores = [
  [ 80, 90],
  [ 0, 0, 0],
  [65, 70],
  [],
  [ 0, 0],
];

const cleanedScores = cleanScores(scores);
console.log(cleanedScores);//[ [ 80, 90 ], [ 65, 70 ] ];
console.log(cleanedScores !== scores);


//Exercise 11
//multBy takes a number, and returns a function. That function takes another number and returns the product of that number and the number passed to multBy. If multBy is passed anything other than a number, then the returned function should use one instead of what was passed into multBy
function multBy(num1){
    return (num2) => {
      if(typeof num1 === 'string'){
        return num2
      }else {
        return num1 * num2
      }
    }
}
const multBy3 = multBy(3);
console.log(multBy3(4));//12
const multBy5 = multBy(5);
console.log(multBy5(10));//50
const multByNotNumber = multBy('a');
console.log(multByNotNumber(10));//10
