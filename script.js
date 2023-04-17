// array of verbs
const verbs = [
  'run',
  'jump',
  'sleep',
  'eat',
  'drink',
  'walk',
  'talk',
  'sing',
  'dance',
  'read',
  'write',
  'swim',
  'draw',
  'paint',
  'drive',
  'ride',
  'fly',
  'work',
  'play',
  'study',
  'teach',
  'learn',
  'climb',
  'cook',
  'clean',
  'shop',
  'travel',
  'watch',
  'listen',
  'smile',
  'laugh',
  'cry',
  'dream',
  'think',
  'feel',
  'love',
  'hate',
  'like',
  'dislike',
];

// array of subjects
const subjects = [
  'I',
  'you',
  'he',
  'she',
  'it',
  'we',
  'they',
  'John',
  'Mary',
  'Tom',
  'Lisa',
  'David and Emily',
  'Michael and Sarah',
  'You and I',
];

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
