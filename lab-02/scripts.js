
let myCount = 0;

function greetMe() {
  myCount += 1;
  myTrigger.textContent = `myCount ${myCount}`;
}

myTrigger.addEventListener(`click`, greetMe);
