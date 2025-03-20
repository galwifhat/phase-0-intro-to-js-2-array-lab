// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

// ✓ appends a cat to the end of the cats array
function destructivelyAppendCat(name = "Ralph") {
  return cats.push(name);
}
console.log(destructivelyAppendCat());
console.log(cats);

// ✓ prepends a cat to the beginning of the cats array

function destructivelyPrependCat(name = "Bob") {
  return cats.unshift(name);
}
console.log(destructivelyPrependCat());
console.log(cats);

// ✓ removes the last cat from the cats array

function destructivelyRemoveLastCat() {
  return cats.pop();
}
console.log(destructivelyRemoveLastCat());
console.log(cats);

// ✓ removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  return cats.shift();
}
console.log(destructivelyRemoveFirstCat());
console.log(cats);

// ✓ appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name = "Broom") {
  const newCats = [...cats, name];
  return newCats;
}

console.log(appendCat());
console.log(cats);

// ✓ prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name = "Broom") {
  const newCats = [name, ...cats];
  return newCats;
}
console.log(prependCat());
console.log(cats);

//  ✓ removes the last cat in the cats array and returns a new array,
//  leaving the cats array unchanged
function removeLastCat(name = "Broom") {
  return cats.slice(0, cats.length - 1);
}
console.log(removeLastCat());
console.log(cats);

// ✓ removes the first cat from the cats array and returns a new array,
// leaving the cats array unchanged
function removeFirstCat(name = "Broom") {
  return cats.slice(1);
}
console.log(removeFirstCat());
console.log(cats);
