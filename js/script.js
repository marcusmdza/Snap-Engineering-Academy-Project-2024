const songs = [
    {
        image: "images/songs/intro-ariana-grande.jpg",
        title: "intro (end of the world)",
        album: "eternal sunshine",
        artist: "Ariana Grande",
        length: "1:32",
        genre: "Sad"
    },
    {
        image: "images/songs/please_dont_fall.jpg",
        title: "Don't Fall In Love With Me",
        album: "Don't Fall In Love With Me",
        artist: "Khalid",
        length: "2:58",
        genre: "R&B"
    },
    {
        image: "images/songs/feel_it.jpg",
        title: "Feel It",
        album: "Feel It",
        artist: "d4vd",
        length: "2:38",
        genre: "Happy"
    },
    {
        image: "images/songs/teo.jpeg",
        title: "Thru My Hair",
        album: "¿Téo?",
        artist: "¿Téo?",
        length: "1:41",
        genre: "R&B"
    },
    {
        image: "images/songs/magic_hour.jpeg",
        title: "Magic Hour",
        album: "Luna",
        artist: "¿Téo?",
        length: "1:15",
        genre: "Fast"
    },
    {
        image: "images/songs/hell_bakar.jpeg",
        title: "Hell N Back",
        album: "Hell N Back",
        artist: "Bakar, Summer Walker",
        length: "3:15",
        genre: "R&B"
    },
    {
        image: "images/songs/jealousy_rubii.jpeg",
        title: "Jealousy",
        album: "Jealousy",
        artist: "RUBII",
        length: "2:53",
        genre: "Smooth"
    },
    {
        image: "images/songs/usher.jpeg",
        title: "DJ Got Us Fallin' In Love",
        album: "Raymond v Raymond",
        artist: "USHER, Pitbull",
        length: "3:41",
        genre: "Beats"
    },
    {
        image: "images/songs/like_that_future.jpg",
        title: "Like That",
        album: "WE DON'T TRUST YOU",
        artist: "Future, Kendrick Lamar",
        length: "4:28",
        genre: "Rap"
    },
    {
        image: "images/songs/magnetic_illit.jpg",
        title: "Magnetic",
        album: "SUPER REAL ME",
        artist: "ILLIT",
        length: "2:41",
        genre: "Happy"
    },    
    {
        image: "images/songs/leave_you_alone.jpg",
        title: "Leave You Alone",
        album: "Heart On My Sleeve",
        artist: "Ella Mai",
        length: "3:29",
        genre: "R&B"
    },    
    {
        image: "images/songs/knock2.jpg",
        title: "dashtar* - VIP",
        album: "dashstar* (VIP)",
        artist: "Knock2",
        length: "2:20",
        genre: "Beats"
    },    
    {
        image: "images/songs/isoxo.jpg",
        title: "dontstopme!",
        album: "dashstar* (VIP)",
        artist: "ISOxo",
        length: "2:20",
        genre: "Beats"
    },
    {
        image: "images/songs/william_singe.jpg",
        title: "Have To Be",
        album: "Where Do Birds Go At Night",
        artist: "William Singe",
        length: "2:51",
        genre: "R&B"
    },
    {
        image: "images/songs/nivea.jpg",
        title: "Don't Mess With My Man",
        album: "Nivea",
        artist: "Nivea, Brian Casey, Brandon Casey",
        length: "3:33",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/nvmd.jpg",
        title: "NVMD",
        album: "NVMD",
        artist: "Denise Julia",
        length: "3:01",
        genre: "R&B"
    },
    {
        image: "images/songs/intro-ariana-grande.jpg",
        title: "the boy is mine",
        album: "eternal sunshine",
        artist: "Ariana Grande",
        length: "2:54",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/intro-ariana-grande.jpg",
        title: "bye",
        album: "eternal sunshine",
        artist: "Ariana Grande",
        length: "2:45",
        genre: "Happy"
    },
    {
        image: "images/songs/vultures.jpg",
        title: "Burn",
        album: "VULTURES 1",
        artist: "¥$, Kanye West, Ty Dolla $ign",
        length: "1:51",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/spiderman.jpg",
        title: "Am I Dreaming",
        album: "Across the Spider-verse",
        artist: "Metro Boomin",
        length: "4:16",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/stupid_in_love.jpg",
        title: "STUPID IN LOVE",
        album: "STUPID IN LOVE",
        artist: "MAX, HUH YUNJIN",
        length: "2:53",
        genre: "Happy"
    },
    {
        image: "images/songs/sunny_day.jpg",
        title: "Sunny Day",
        album: "Beatopia",
        artist: "beabadoobee",
        length: "2:40",
        genre: "Smooth"
    },
    {
        image: "images/songs/whatever_she_wants.jpg",
        title: "Whatever She Wants",
        album: "Whatever She Wants",
        artist: "Bryson Tiller",
        length: "2:41",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/cherry_wine.jpg",
        title: "Cherry Wine",
        album: "Cherry Wine",
        artist: "grentperez",
        length: "2:53",
        genre: "Happy"
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "prove it",
        album: "american dream",
        artist: "21 Savage, Summer Walker",
        length: "3:28",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "n.h.i.e.",
        album: "n.h.i.e.",
        artist: "21 Savage, Doja Cat",
        length: "2:24",
        genre: "R&B"
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "should've wore a bonnet",
        album: "american dream",
        artist: "21 Savage,  Brent Faiyaz",
        length: "3:07",
        genre: "R&B"
    },
    {
        image: "images/songs/next_door.jpg",
        title: "next door (feat. ASTN)",
        album: "next door - Single",
        artist: "Amelia Moore, ASTN",
        length: "3:28",
        genre: "Cozy"
    },
    {
        image: "images/songs/send_your_loving.jpg",
        title: "Send Your Loving",
        album: "Send Your Loving - Single",
        artist: "Ama Louise",
        length: "3:19",
        genre: "R&B"
    },
    {
        image: "images/songs/smart_leserrafim.jpeg",
        title: "Smart",
        album: "EASY",
        artist: "LE SERRAFIM",
        length: "2:46",
        genre: "KPop"
    },
    {
        image: "images/songs/saturn.jpg",
        title: "Saturn",
        album: "Saturn",
        artist: "SZA",
        length: "3:06",
        genre: "R&B"
    },
    {
        image: "images/songs/5x.jpg",
        title: "5X",
        album: "Life of a DON",
        artist: "Don Toliver",
        length: "2:12",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/like_i_do.jpg",
        title: "Like I Do",
        album: "Like I Do - Single",
        artist: "J. Tajor",
        length: "2:29",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/perfect_night.jpg",
        title: "Perfect Night",
        album: "Perfect Night - Single",
        artist: "LE SERRAFIM",
        length: "2:39",
        genre: "KPop"
    },
    {
        image: "images/songs/baby_powder.jpg",
        title: "Baby Powder",
        album: "Division",
        artist: "Jenevieve",
        length: "2:57",
        genre: "Smooth"
    },
    {
        image: "images/songs/feather.jpg",
        title: "Feather",
        album: "emails i can't send fwd:",
        artist: "Sabrina Carpenter",
        length: "3:06",
        genre: "Pop"
    },
    {
        image: "images/songs/tip_toe.jpg",
        title: "Tip Toe",
        album: "Tip Toe",
        artist: "HYBS",
        length: "3:45",
        genre: "Smooth"
    },
    {
        image: "images/songs/seven.jpg",
        title: "Seven (feat. Latto)",
        album: "GOLDEN",
        artist: "Jung Kook, Latto",
        length: "3:04",
        genre: "Pop"
    },
    {
        image: "images/songs/ditto.jpg",
        title: "Ditto",
        album: "Ditto",
        artist: "NewJeans",
        length: "3:06",
        genre: "KPop"
    },
    {
        image: "images/songs/closure.jpg",
        title: "Closure",
        album: "Still Over It",
        artist: "Summer Walker",
        length: "2:12",
        genre: "R&B"
    },
    {
        image: "images/songs/2soon.jpg",
        title: "2 soon",
        album: "2 soon - Single",
        artist: "Keshi",
        length: "3:27",
        genre: "Sad"
    },
    {
        image: "images/songs/the_aisle.jpg",
        title: "The aisle",
        album: "Heaven knows",
        artist: "PinkPantheress",
        length: "2:46",
        genre: "Chill"
    },
    {
        image: "images/songs/larger_than_life.jpg",
        title: "Upset",
        album: "Larger Than Life",
        artist: "Brent Faiyaz, FELIX!",
        length: "2:58",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/playing_tricks.jpg",
        title: "playing tricks",
        album: "girls like me don't cry",
        artist: "thủy",
        length: "3:04",
        genre: "Sad"
    },
    {
        image: "images/songs/worst_behavior.jpg",
        title: "worst behavior",
        album: "Positions (Deluxe)",
        artist: "Ariana Grande",
        length: "2:04",
        genre: "Pop"
    },
    {
        image: "images/songs/daylight.jpg",
        title: "Daylight",
        album: "For All The Dogs",
        artist: "Drake",
        length: "2:44",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/mosquito.jpg",
        title: "Mosquito",
        album: "Mosquito - Single",
        artist: "PinkPantheress",
        length: "2:26",
        genre: "Pop"
    },
    {
        image: "images/songs/agora_hills.jpg",
        title: "Agora Hills",
        album: "Scarlet",
        artist: "Doja Cat",
        length: "4:25",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/hold_me.jpg",
        title: "hold me, never let go",
        album: "Her Favorite Flowers",
        artist: "Rocco",
        length: "3:13",
        genre: "Smooth"
    },
    {
        image: "images/songs/positions.jpg",
        title: "34+35",
        album: "Positions",
        artist: "Ariana Grande",
        length: "2:54",
        genre: "Pop"
    },
    {
        image: "images/songs/easier_said.jpg",
        title: "Easier Said Than Done",
        album: "Thee Sacred Souls",
        artist: "Thee Sacred Souls",
        length: "2:55",
        genre: "Cozy"
    },
    {
        image: "images/songs/doin_yo.jpg",
        title: "Doin Yo Stuff",
        album: "Sixtape 3",
        artist: "Blxst, Bino Rideaux",
        length: "2:36",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/justified.jpg",
        title: "Rock Your Body",
        album: "Justified",
        artist: "Justin Timberlake",
        length: "4:27",
        genre: "Pop"
    },
    {
        image: "images/songs/utopia.jpg",
        title: "I KNOW ?",
        album: "UTOPIA",
        artist: "Travis Scott",
        length: "3:32",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/get_up.jpg",
        title: "Get Up",
        album: "Get Up",
        artist: "NewJeans",
        length: "0:36",
        genre: "KPop"
    },
    {
        image: "images/songs/mary.jpg",
        title: "Mary Jane (All Night Long)",
        album: "My Life",
        artist: "Mary J. Blige",
        length: "4:39",
        genre: "R&B"
    },
    {
        image: "images/songs/time_flies.jpg",
        title: "Time Flies",
        album: "Dark Lane Demo Tapes",
        artist: "Drake",
        length: "3:13",
        genre: "Hip Hop"
    },
    {
        image: "images/songs/seasons.jpg",
        title: "seasons",
        album: "summer flows 0.02",
        artist: "wave to earth",
        length: "4:16",
        genre: "Sad"
    },
    {
        image: "images/songs/sour.jpg",
        title: "sour haribos",
        album: "sour haribos - Single",
        artist: "venny",
        length: "2:10",
        genre: "Beats"
    },
    {
        image: "images/songs/when.jpg",
        title: "Silver Lining",
        album: "When We Were Younger",
        artist: "grentperez",
        length: "3:39",
        genre: "Happy"
    },
    
  ];
  
  // function to create song card HTML element
  function createSongCard(song) {
    return `
      <div class="song-card">
        <img src="${song.image}" loading="lazy" sizes="225px" class="song-cover-img">
        <div class="song-card-text song-title">${song.title}</div>
        <div class="song-card-text song-album">${song.album}</div>
        <div class="song-card-text song-artist">${song.artist}</div>
        <div class="song-card-text song-length">${song.length}</div>
      </div>
    `;
  }
  
  function renderSongs(songs) {
    // find the container for the song cards
    const container = document.querySelector('.section.song-cards');
    // clear any existing content
    container.innerHTML = '';
    // create HTML for each song and append to the container
    songs.forEach(song => {
      container.innerHTML += createSongCard(song);
    });
  }
  
let sortState = 'none'; // song title sorting
let albumSortState = 'none'; // album sorting

// song title sort function
function sortSongs(songs, state) {
  let sortedSongs = [...songs]; // Create a shallow copy to avoid mutating the original array
  if (state === 'ascending') {
    sortedSongs.sort((a, b) => a.title.localeCompare(b.title));
  } else if (state === 'descending') {
    sortedSongs.sort((a, b) => b.title.localeCompare(a.title));
  }
  return sortedSongs;
}

// song album sort function
function sortAlbums(songs, state) {
    let sortedSongs = [...songs]; // Create a shallow copy to avoid mutating the original array
    if (state === 'ascending') {
      sortedSongs.sort((a, b) => a.album.localeCompare(b.album));
    } else if (state === 'descending') {
      sortedSongs.sort((a, b) => b.album.localeCompare(a.album));
    }
    return sortedSongs;
  }
  

// re-render song function
function updateSortAndRender() {
    const titleButton = document.querySelector('.catalog-title-button');
    const albumButton = document.getElementById('album-button'); 

  
    // rotate through the sort states and update the button text
    switch (sortState) {
      case 'none':
        sortState = 'ascending';
        titleButton.textContent = 'Title ▲';
        albumButton.textContent = 'Album ';
        break;
      case 'ascending':
        sortState = 'descending';
        titleButton.textContent = 'Title ▼';
        albumButton.textContent = 'Album ';
        break;
      case 'descending':
        sortState = 'none';
        titleButton.textContent = 'Title';
        albumButton.textContent = 'Album ';
        break;
    }
  
    // sort and re-render songs
    const sortedSongs = sortSongs(songs, sortState);
    renderSongs(sortedSongs);
  }

// re-render songs based on album sorting
function updateAlbumSortAndRender() {
    const albumButton = document.getElementById('album-button'); 
    const titleButton = document.querySelector('.catalog-title-button');

  
    switch (albumSortState) {
      case 'none':
        albumSortState = 'ascending';
        albumButton.textContent = 'Album ▲';
        titleButton.textContent = 'Title';
        break;
      case 'ascending':
        albumSortState = 'descending';
        albumButton.textContent = 'Album ▼';
        titleButton.textContent = 'Title';
        break;
      case 'descending':
        albumSortState = 'none';
        albumButton.textContent = 'Album ';
        titleButton.textContent = 'Title';
        break;
    }
  
    // sort and re-render songs based on the album
    const sortedSongs = sortAlbums(songs, albumSortState);
    renderSongs(sortedSongs);
  }
  
  function filterByGenre(genre) {
    const filteredSongs = songs.filter(song => song.genre === genre);
    renderSongs(filteredSongs);
  }
  
  // search bar function:
  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('Search-Bar-Catalog');
    const searchIcon = document.querySelector('.image-5');
  
    // Function to filter and render the song cards based on the search input
    function filterSongs() {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredSongs = songs.filter(song => song.title.toLowerCase().includes(searchTerm));
      renderSongs(filteredSongs);
    }
  
    // Event listener for the search input
    searchInput.addEventListener('input', filterSongs);
  
    // Event listener for the search icon click
    searchIcon.addEventListener('click', filterSongs);
  
    // Event listener for pressing 'Enter' key within the search input
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default form submit action
        filterSongs();
      }
    });
  
    // Initial render
    renderSongs(songs);
  });  

  // event listener for genre buttons
  document.querySelectorAll('.genre-button').forEach(button => {
    button.addEventListener('click', () => {
      const genre = button.id; // use the button's ID as the genre to filter by
      filterByGenre(genre);
    });
  });
  

  // event listeners for the song and album buttons
  document.querySelector('.catalog-title-button').addEventListener('click', updateSortAndRender);
  document.getElementById('album-button').addEventListener('click', updateAlbumSortAndRender);
  document.getElementById('Show All').addEventListener('click', () => {
    renderSongs(songs);
  });
  
  // first render
  document.addEventListener('DOMContentLoaded', () => renderSongs(songs));
  