var resultOneT = "";
var resultOneA = "";


//LIESTEN TO THE BUTTON PRESS, AND STORE THE USER'S INPUT
document.getElementById('searchform').addEventListener('submit', function (e) {
   e.preventDefault();
        aResult = (document.getElementById('artist').value)
        tResult = (document.getElementById('track').value);
        console.log(aResult, tResult);


//USE THE USER'S INPUT TO SEARCH FOR SIMILAR TRACKS ON LAST.FM
// document.getElementById("Results").onclick = function() {goResults() };
// function goResults() {
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : aResult,
  track : tResult,
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[1].name + " " + 
  data.similartracks.track[1].artist.name);
          console.log(resultOne);

    resultOneT = (data.similartracks.track[1].name);
          console.log(resultOneT);
    resultOneA = (data.similartracks.track[1].artist.name);
          console.log(resultOneA);

var resultTwo = (data.similartracks.track[2].name + " " + 
  data.similartracks.track[2].artist.name);
          console.log(resultTwo);

    // var resultTwoT = (data.similartracks.track[2].name);
    //       console.log(resultTwoT);
    // var resultTwoA = (data.similartracks.track[2].artist.name);
    //       console.log(resultTwoA);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);

    // var resultThreeT = (data.similartracks.track[9].name);
    //       console.log(resultThreeT);
    // var resultThreeA = (data.similartracks.track[9].artist.name);
    //       console.log(resultThreeA);


//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains the variable
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });

  }, error: function(code, message){
    console.log("Error: ");
}});}, false);



console.log(resultOneT);
console.log(resultOneA);










document.getElementById("Result1search").onclick = function() {goResults1() };
function goResults1() {
// // var LastfmAPI = require('lastfmapi');

var cache = new LastFMCache();

var lastfm = new LastFM({
    apiKey : '70cee47d1aecc2d367a6d8cbfbd10631',
    apiSecret : '4572becf9ca21a83f4abe76339dfcc8f',
    cache : cache,
});

lastfm.track.getSimilar({
  artist : 'queen',
  track : 'we will rock you',
  limit : '10',
  autocorrect : '1'}, {success: function(data){
    console.log(data);

//CREATE INDIVIDUAL VARIABLES FOR EACH SONG, WITH TRACK NAME AND ARTIST.
var resultOne = (data.similartracks.track[1].name + " " + 
  data.similartracks.track[1].artist.name);
          console.log(resultOne);

var resultTwo = (data.similartracks.track[2].name + " " + 
  data.similartracks.track[2].artist.name);
          console.log(resultTwo);

var resultThree = (data.similartracks.track[9].name + " " + 
  data.similartracks.track[9].artist.name);
          console.log(resultThree);



//USE THE INDIVIDUAL SONG VARIABLES TO SEARCH ON SPOTIFY AND GET ID
var spotifyApi = new SpotifyWebApi();

// search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks(resultOne)
  .then(function(data) {
    console.log('Search for Option 1', data);
    var trackId1 = data.tracks.items[0].id;
    console.log('ID for Option 1:', trackId1);
    var track1Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId1);
    console.log(track1Url);
    var iframe1 = document.querySelector("#result iframe:nth-child(1)");
    iframe1.setAttribute("src", track1Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultTwo)
  .then(function(data) {
    console.log('Search for Option 2', data);
    var trackId2 = data.tracks.items[0].id;
    console.log('ID for Option 2:', trackId2);
    var track2Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId2);
    console.log(track2Url);
    var iframe2 = document.querySelector("#result iframe:nth-child(2)");
    iframe2.setAttribute("src", track2Url);
  }, function(err) {
    console.error(err);
  });

  spotifyApi.searchTracks(resultThree)
  .then(function(data) {
    console.log('Search for Option 3', data);
    var trackId3 = data.tracks.items[0].id;
    console.log('ID for Option 3:', trackId3);
    var track3Url = ('https://embed.spotify.com/?uri=spotify:track:' + trackId3);
    console.log(track3Url);
    var iframe3 = document.querySelector("#result iframe:nth-child(3)");
    iframe3.setAttribute("src", track3Url);
  }, function(err) {
    console.error(err);
  });

  }, error: function(code, message){
    console.log("Error: ");
}});}























