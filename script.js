const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let random_word = "";
let scramble_random_word = "";
let words = ['mango', 'coding', 'intelligent', 'corona', 'data','arafath','school','study','project','hungry','health']
const createnewwords = () => {
  let ranNum = Math.floor(Math.random() * words.length);
  let new_word = words[ranNum];
  return new_word;
}
const r_createwords = (arr) => {
  for (i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i - 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr);
  return arr;
}
btn.addEventListener('click', function() {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
    random_word = createnewwords();
    scramble_random_word = r_createwords(random_word.split("")).join("");
    msg.innerHTML =`Guess the Word:${scramble_random_word}`;
  }
  else 
  {
    let user_word=guess.value;
     if(user_word===random_word)
     {
        play=false;
       msg.innerHTML=`Awesome its Correct Guess ${random_word}`;
       btn.innerHTML="Start Again";
        guess.classList.toggle('hidden');
       guess.value="";
     }
    else 
     {
        msg.innerHTML=`Sorry,Your guess is wrong please try again:${scramble_random_word}`;
       guess.value="";
     }
  }
})