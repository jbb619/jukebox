function parseNote(note){
 let parsednote;

 if (note.indexOf("*") === -1){
   parsednote = {
     pitch: note,
     beats: 1
   };
 }
 else {
  let splitString = note.split("*");
  parsednote = {
     pitch: splitString[0],
     beats: (parseInt(splitString[1])),
  }
 }
 console.log(parsednote);

  return parsednote;
}


function parseSong(song){
  let splitSong = song.split(" ");
  let parsedSplitSong = [];
  for (var i = 0; i < splitSong.length; i++) {
    parsedSplitSong.push(parseNote(splitSong[i]));
  }
  console.log(parsedSplitSong);
  return parsedSplitSong;
}

let enteredSong = prompt("Enter your a song");
parsedSong = parseSong(enteredSong);
playSong(parsedSong, 60);
