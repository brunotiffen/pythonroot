document.getElementById('searchform').addEventListener('submit', function (e) {
   e.preventDefault();
        aResult = (document.getElementById('artist').value)
        tResult = (document.getElementById('track').value);
        console.log(aResult, tResult);
}, false);

var aResult = "";
var tResult = "";
console.log(aResult, tResult);


document.getElementById("Results").onclick = function() {goResults() };
function goResults() {

// var LastfmAPI = require('lastfmapi');

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

var resultOneTrack = data.similartracks.track[1].name;
          console.log(resultOneTrack);

var resultOneArtist = data.similartracks.track[1].artist.name;
          console.log(resultOneArtist);

var resultTwoTrack = data.similartracks.track[2].name;
          console.log(resultTwoTrack);

var resultTwoArtist = data.similartracks.track[2].artist.name;
          console.log(resultTwoArtist);

var resultThreeTrack = data.similartracks.track[9].name;
          console.log(resultThreeTrack);

var resultThreeArtist = data.similartracks.track[9].artist.name;
          console.log(resultThreeArtist);




var spotifyApi = new SpotifyWebApi();

  // search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('islands the xx')

  .then(function(data) {
    console.log('Search by "islands"', data);
  }, function(err) {
    console.error(err);
  });


	}, error: function(code, message){
    console.log("Error: ");
}});}































//LIMIT

//ORIGINAL FUNCTION
// lastfm.artist.getInfo({
// 	artist: 'The xx'}, {success: function(data){
//     console.log("Success: " + data.similiartracks);
// }, error: function(code, message){
//     console.log("Error: ");
// }});}


// ORIGINAL FUNCTION WITH TRACK SIMILAR APPLIED IN THE FORMAT OF THE OLD ONE
// lastfm.track.getSimilar({
// 	artist : 'The xx',
// 	track : 'Islands',
// 	limit : '3'}, function (err, track) {
// 	if (err) { throw err; }
// 	console.log(track);
// });
// }


// OLD FUNCTION IN OTHER FORMAT
// lfm.track.getSimilar({
// 	'artist' : 'The Rives',
// 	'track' : 'I Want More',
// 	'limit' : '3',
// 	'autocorrect' : '1'
// }, function (err, track) {
// 	if (err) { throw err; }
// 	console.log(track);
// });


// var trackStream = lastfm.stream('username');

// trackStream.on('lastPlayed', function(track) {
//   console.log('Last played: ' + track.name);
// });

// trackStream.on('nowPlaying', function(track) {
//   console.log('Now playing: ' + track.name);
// });

// trackStream.on('scrobbled', function(track) {
//   console.log('Scrobbled: ' + track.name);
// });

// trackStream.on('stoppedPlaying', function(track) {
//   console.log('Stopped playing: ' + track.name);
// });

// trackStream.on('error', function(error) {
//   console.log('Error: '  + error.message);
// });

// trackStream.start();

// var session = lastfm.session({
//    token: token,
//    handlers: {
//       success: function(session) {
//          lastfm.update('nowplaying', session, { track: track } );
//          lastfm.update('scrobble', session, { track: track, timestamp: 12345678 });
//       }
//    }
// });

// var request = lastfm.request("artist.getInfo", {
//     artist: "The Mae Shi",
//     handlers: {
//         success: function(data) {
//             console.log("Success: " + data);
//         },
//         error: function(error) {
//             console.log("Error: " + error.message);
//         }
//     }
// });
// }



//     $.ajax({
//       url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=2b35547bd5675d8ecb2b911ee9901f59&format=json',
//       success: function(data) {
//         alert(data.artist.name);
      

//       }
//     })

// var track.getSimilar({
//     $.ajax({
//         url: 'http://ws.audioscrobbler.com/2.0/',

    
// });