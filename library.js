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

  // it's now a method!
  printPlaylists: function() {
    // Loop over the playlists
    for (let list in this.playlists) {
      console.log(
        `${this.playlists[list]["id"]}: ${this.playlists[list]["name"]} - ${this.playlists[list]["tracks"].length} tracks\n`
      );
    }
  },

  // it's now a method!
  printTracks: function() {
    // Loop over the tracks
    for (let list in this.tracks) {
      console.log(
        `${this.tracks[list]["id"]}: ${this.tracks[list]["name"]} by ${this.tracks[list]["artist"]} (${this.tracks[list]["album"]})\n`
      );
    }
  },

  // it's now a method!
  printPlaylist: function(playlistId) {
    console.log(
      // Print the first line
      `${this.playlists[playlistId]["id"]}: ${this.playlists[playlistId]["name"]} - ${this.playlists[playlistId]["tracks"].length} tracks\n`
    );
    // Loop over the playlist ID given
    for (let track of this.playlists[playlistId]["tracks"]) {
      // Print the information of the tracks for the given playlist ID
      console.log(
        `${this.tracks[track]["id"]}: ${this.tracks[track]["name"]} by ${this.tracks[track]["artist"]} (${this.tracks[track]["album"]})\n`
      );
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    // First, push the new track into the playlist
    this.playlists[playlistId]["tracks"].push(trackId);
    // Return the updated playlist object
    return this.playlists[playlistId];
  },
  addTrack: function(name, artist, album) {
    // Create a variable to store the unique id in
    const newId = generateUid();
    // Add the new track object using the information passed into the argument
    this.tracks[newId] = {
      id: newId,
      name: name,
      artist: artist,
      album: album,
    };
    // Return the unique id to be used later
    return newId;
  },
  addPlaylist: function(name) {
    // Create a variable to store the unique id in
    const newId = generateUid();
    // Add the new playlist object using the information passed into the argument
    this.playlists[newId] = {
      id: newId,
      name: name,
      tracks: [newTrack],
    };
  }
};


// TEST 1:
/* prints a list of all playlists, in the form:
  p01: Coding Music - 2 tracks
  p02: Other Playlist - 1 tracks
*/
console.log("TEST 1:\n");
library.printPlaylists();

console.log("------------------\n");

// TEST 2:
/* prints a list of all tracks, using the following format:
  t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  t02: Model View Controller by James Dempsey (WWDC 2003)
  t03: Four Thirty-Three by John Cage (Woodstock 1952)
*/
console.log("TEST 2:\n");
library.printTracks();

console.log("------------------\n");

// TEST 3:
/* prints a list of tracks for a given playlist, using the following format:
  p01: Coding Music - 2 tracks
  t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  t02: Model View Controller by James Dempsey (WWDC 2003)
*/
console.log("TEST 3:\n");
library.printPlaylist("p01");

console.log("------------------\n");

// TEST 4:
// adds an existing track to an existing playlist
const updatedPlaylist = library.addTrackToPlaylist("t03", "p01");
console.log("TEST 4:\n\n", updatedPlaylist); // Log the updated playlist object

console.log("------------------\n");

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// TEST 5:
// adds a track to the library
const newTrack = library.addTrack("My Desire", "Theophilus Sunday", "Eternal");
console.log("TEST 5:\n\n", library);

console.log("------------------\n");

// TEST 6:
// adds a playlist to the library
library.addPlaylist("Latest Playlist");
console.log("TEST 6:\n\n", library.tracks, library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {};
