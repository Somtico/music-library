const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};


/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function(library) {
  // Loop over the playlists
  for (let list in library.playlists) {
    console.log(
      `${library.playlists[list]["id"]}: ${library.playlists[list]["name"]} - ${library.playlists[list]["tracks"].length} tracks\n`
    );
  }
};

// TEST:
printPlaylists(library);

// const printPlaylists = function (library) {
//   for (let album in library) {
//     if (album === "playlists") {
//       for (let list in album) {
//         // console.log(`${list['id']}: ${list['name']} - ${list["tracks"].length} tracks\n`);
//         console.log(list);
//       }
//     }
//   }
// };

console.log("------------------\n");

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(library) {
  // Loop over the tracks
  for (let list in library.tracks) {
    console.log(
      `${library.tracks[list]["id"]}: ${library.tracks[list]["name"]} by ${library.tracks[list]["artist"]} (${library.tracks[list]["album"]})\n`
    );
  }
};

// TEST
printTracks(library);

console.log("------------------\n");

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  console.log( // Print the first line
    `${library.playlists[playlistId]["id"]}: ${library.playlists[playlistId]["name"]} - ${library.playlists[playlistId]["tracks"].length} tracks\n`
  );
  // Loop over the playlist ID given
  for (let track of library.playlists[playlistId]["tracks"]) {
    // Print the information of the tracks for the given playlist ID
    console.log(
      `${library.tracks[track]["id"]}: ${library.tracks[track]["name"]} by ${library.tracks[track]["artist"]} (${library.tracks[track]["album"]})\n`
    );
  }
};

// TEST:
printPlaylist("p01");

console.log("------------------\n");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  // First, push the new track into the playlist
  library.playlists[playlistId]["tracks"].push(trackId);
  // Return the updated playlist object
  return library.playlists[playlistId];
};

// TEST:
const updatedPlaylist = addTrackToPlaylist("t03", "p01");
console.log(updatedPlaylist); // Log the updated playlist object

console.log("------------------\n");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  // Create a variable to store the unique id in
  const newId = generateUid();
  // Add the new track object using the information passed into the argument
  library.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album
  };
  // Return the unique id to be used later
  return newId;
};

console.log("------------------\n");

// TEST:
const newTrack = addTrack("My Desire", "Theophilus Sunday", "Eternal");
console.log(library);

// adds a playlist to the library
const addPlaylist = function(name) {
  // Create a variable to store the unique id in
  const newId = generateUid();
    // Add the new playlist object using the information passed into the argument
  library.playlists[newId] = {
    id: newId,
    name: name,
    tracks: [newTrack]
  };
};

console.log("------------------\n");

// TEST:
addPlaylist("Latest Playlist");
console.log(library.tracks, library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {};
