// Reference the words.js file that contains the arrays of verbs and subjects
const script = document.createElement('script');
script.src = 'words.js';
document.head.appendChild(script);

// Reference the arrays of verbs and subjects from the words.js file
const verbs = window.verbs;
const subjects = window.subjects;

function generateRandomVerb() {
  // get a random index
  const randomIndex = Math.floor(Math.random() * verbs.length);
  // get the verb at the random index
  const randomVerb = verbs[randomIndex];
  // set the text of the word-right element to the random verb
  document.getElementById('word-right').innerHTML = randomVerb;
}

function generateRandomSubject() {
  // get a random index
  const randomIndex = Math.floor(Math.random() * subjects.length);
  // get the subject at the random index
  const randomSubject = subjects[randomIndex];
  // set the text of the word-left element to the random subject
  document.getElementById('word-left').innerHTML = randomSubject;
}
