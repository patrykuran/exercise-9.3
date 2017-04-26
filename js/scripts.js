var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie".toUpperCase();
var textReplaced = text.replace("Papugi", animal);
var partOfTextReplaced = textReplaced.slice(0,textReplaced.length/2);

console.log(partOfTextReplaced);
