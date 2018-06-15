
// INITIALIZING ALL MY VARIABLES AND GETTING IDS
// INSTANTIATING JUKEBOX OBJECT
let apiKeyTopSongs = 'http://api.napster.com/v2.2/tracks/top?apikey={API_KEY}';
let songs = [];
let choicesSong = 0;
let music = new JukeBox();
let myAudio = document.getElementById("myAudio");
let one = $('#uno');
let two = $('#dos');
let three = $('#tres');

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
    if (choicesSong === songs.length - 1) {
      choicesSong = 0;
    }

    $("img").attr('src', `http://direct.napster.com/imageserver/v2/artists/${songs[choicesSong].links.artists.ids[0]}/images/300x300.jpg`);
    myAudio.src = songs[choicesSong % songs.length].previewURL;
    myAudio.play();
    ajaxc();
  }

  this.previous = () => {
    choicesSong -= 1;
    if (choicesSong === 0) {
      choicesSong = songs.length - 1;
    }

    $("img").attr('src', `http://direct.napster.com/imageserver/v2/artists/${songs[choicesSong].links.artists.ids[0]}/images/300x300.jpg`);
    myAudio.src = songs[choicesSong % songs.length].previewURL;
    myAudio.play();
    ajaxc();
  }

  this.playSelected = (event) => {
    $.ajax({
      url: apiKeyTopSongs,
      success: (data) => {
        $("img").attr('src', `http://direct.napster.com/imageserver/v2/artists/${songs[choicesSong].links.artists.ids[0]}/images/300x300.jpg`);
        var songSrc = event.getAttribute('data-song');
        myAudio.src = songSrc;
        myAudio.play();
        console.log('clicked');
        one.text(data.tracks[choicesSong].artistName);
        two.text(data.tracks[choicesSong].name);
        three.text(data.tracks[choicesSong].albumName);
      }
    });

  }

}

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
});

function ajaxc() {
  $.ajax({
    url: apiKeyTopSongs,
    success: (data) => {
      one.text(data.tracks[choicesSong].artistName);
      two.text(data.tracks[choicesSong].name);
      three.text(data.tracks[choicesSong].albumName);
    }
  })

}

$.ajax({
  url: apiKeyTopSongs,
  success: (data) => {
    for (var i = 0; i < data.tracks.length; i++) {
      songs.push(data.tracks[i]);
      myAudio.src = songs[0].previewURL;
      $("img").attr('src', `http://direct.napster.com/imageserver/v2/artists/${songs[0].links.artists.ids[0]}/images/300x300.jpg`);
      $('#listOfSongs').append(`<tr class='notFirst' data-info=${data.tracks} data-song=${data.tracks[i].previewURL} onClick='music.playSelected(this)' ><td> ${data.tracks[i].artistName} </td><td> ${data.tracks[i].name} </td></tr>`);
    }

    one.text(data.tracks[choicesSong].artistName);
    two.text(data.tracks[choicesSong].name);
    three.text(data.tracks[choicesSong].albumName);


  }
})
