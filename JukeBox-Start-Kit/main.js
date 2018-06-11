
// INITIALIZING ALL MY VARIABLES AND GETTING IDS
var songs = ["music/Balenciaga.mp3", "music/La-Primera-Vez.mp3", "music/Lo-Que-Yo-Diga.mp3"];
var choicesSong = 0;
var myAudio =  document.getElementById("myAudio");
myAudio.src = songs[choicesSong];


// JUKEBOX OBJECT
function JukeBox() {

  this.play = () => {
    myAudio.play();
  }

  this.pause = () => {
    myAudio.pause();
  }

  this.stop = () => {
    myAudio.pause();
    myAudio.currentTime = 0;
  }

  this.next = () => {
 		choicesSong += 1;
 		myAudio.src = songs[choicesSong % songs.length];
 		myAudio.play();
 	}

  this.previous = () => {
    choicesSong -= 1;
    if(choicesSong === -1){
      choicesSong = songs.length - 1;
    }
    myAudio.src = songs[choicesSong % songs.length];
    myAudio.play();
  }

}

// INSTANTIATING JUKEBOX OBJECT
var music = new JukeBox();

// EVENT LISTENER FOR ALL MY BUTTONS
$("#prev").on("click", () => {
  console.log("previous");
  music.previous();
});

$("#play").on("click", () => {
  console.log("play");
  music.play();
});

$("#pause").on("click", () => {
  console.log("pause");
  music.pause();
});

$("#stop").on("click", () => {
  console.log("stop");
  music.stop();
});

$("#next").on("click", () => {
  console.log("next");
  music.next();
})

// restart
// audioElement.currentTime = 0;
