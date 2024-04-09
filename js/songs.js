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
        genre: ""
    },
    {
        image: "images/songs/magic_hour.jpeg",
        title: "Magic Hour",
        album: "Luna",
        artist: "¿Téo?",
        length: "1:15",
        genre: ""
    },
    {
        image: "images/songs/hell_bakar.jpeg",
        title: "Hell N Back",
        album: "Hell N Back",
        artist: "Bakar, Summer Walker",
        length: "3:15",
        genre: ""
    },
    {
        image: "images/songs/jealousy_rubii.jpeg",
        title: "Jealousy",
        album: "Jealousy",
        artist: "RUBII",
        length: "2:53",
        genre: ""
    },
    {
        image: "images/songs/usher.jpeg",
        title: "DJ Got Us Fallin' In Love",
        album: "Raymond v Raymond",
        artist: "USHER, Pitbull",
        length: "3:41",
        genre: ""
    },
    {
        image: "images/songs/like_that_future.jpg",
        title: "Like That",
        album: "WE DON'T TRUST YOU",
        artist: "Future, Kendrick Lamar",
        length: "4:28",
        genre: ""
    },
    {
        image: "images/songs/magnetic_illit.jpg",
        title: "Magnetic",
        album: "SUPER REAL ME",
        artist: "ILLIT",
        length: "2:41",
        genre: ""
    },    
    {
        image: "images/songs/leave_you_alone.jpg",
        title: "Leave You Alone",
        album: "Heart On My Sleeve",
        artist: "Ella Mai",
        length: "3:29",
        genre: ""
    },    
    {
        image: "images/songs/knock2.jpg",
        title: "dashtar* - VIP",
        album: "dashstar* (VIP)",
        artist: "Knock2",
        length: "2:20",
        genre: ""
    },    
    {
        image: "images/songs/isoxo.jpg",
        title: "dontstopme!",
        album: "dashstar* (VIP)",
        artist: "ISOxo",
        length: "2:20",
        genre: ""
    },
    {
        image: "images/songs/william_singe.jpg",
        title: "Have To Be",
        album: "Where Do Birds Go At Night",
        artist: "William Singe",
        length: "2:51",
        genre: ""
    },
    {
        image: "images/songs/nivea.jpg",
        title: "Don't Mess With My Man",
        album: "Nivea",
        artist: "Nivea, Brian Casey, Brandon Casey",
        length: "3:33",
        genre: ""
    },
    {
        image: "images/songs/nvmd.jpg",
        title: "NVMD",
        album: "NVMD",
        artist: "Denise Julia",
        length: "3:01",
        genre: ""
    },
    {
        image: "images/songs/intro-ariana-grande.jpg",
        title: "the boy is mine",
        album: "eternal sunshine",
        artist: "Ariana Grande",
        length: "2:54",
        genre: ""
    },
    {
        image: "images/songs/intro-ariana-grande.jpg",
        title: "bye",
        album: "eternal sunshine",
        artist: "Ariana Grande",
        length: "2:45",
        genre: ""
    },
    {
        image: "images/songs/vultures.jpg",
        title: "Burn",
        album: "VULTURES 1",
        artist: "¥$, Kanye West, Ty Dolla $ign",
        length: "1:51",
        genre: ""
    },
    {
        image: "images/songs/spiderman.jpg",
        title: "Am I Dreaming",
        album: "Across the Spider-verse",
        artist: "Metro Boomin",
        length: "4:16",
        genre: ""
    },
    {
        image: "images/songs/stupid_in_love.jpg",
        title: "STUPID IN LOVE",
        album: "STUPID IN LOVE",
        artist: "MAX, HUH YUNJIN",
        length: "2:53",
        genre: ""
    },
    {
        image: "images/songs/sunny_day.jpg",
        title: "Sunny Day",
        album: "Beatopia",
        artist: "beabadoobee",
        length: "2:40",
        genre: ""
    },
    {
        image: "images/songs/whatever_she_wants.jpg",
        title: "Whatever She Wants",
        album: "Whatever She Wants",
        artist: "Bryson Tiller",
        length: "2:41",
        genre: ""
    },
    {
        image: "images/songs/cherry_wine.jpg",
        title: "Cherry Wine",
        album: "Cherry Wine",
        artist: "grentperez",
        length: "2:53",
        genre: ""
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "prove it",
        album: "american dream",
        artist: "21 Savage, Summer Walker",
        length: "3:28",
        genre: ""
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "n.h.i.e.",
        album: "n.h.i.e.",
        artist: "21 Savage, Doja Cat",
        length: "2:24",
        genre: ""
    },
    {
        image: "images/songs/american_dream.jpeg",
        title: "should've wore a bonnet",
        album: "american dream",
        artist: "21 Savage,  Brent Faiyaz",
        length: "3:07",
        genre: ""
    },
    {
        image: "images/songs/next_door.jpg",
        title: "next door (feat. ASTN)",
        album: "next door (feat. ASTN)",
        artist: "Amelia Moore, ASTN",
        length: "3:28",
        genre: ""
    },
    {
        image: "images/songs/send_your_loving.jpg",
        title: "Send Your Loving",
        album: "Send Your Loving",
        artist: "Ama Louise",
        length: "3:19",
        genre: ""
    },
    {
        image: "images/songs/smart_leserrafim.jpeg",
        title: "Smart",
        album: "EASY",
        artist: "LE SERRAFIM",
        length: "2:46",
        genre: ""
    },
    {
        image: "images/songs/saturn.jpg",
        title: "Saturn",
        album: "Saturn",
        artist: "SZA",
        length: "3:06",
        genre: ""
    },
    {
        image: "images/songs/5x.jpg",
        title: "5X",
        album: "Life of a DON",
        artist: "Don Toliver",
        length: "2:12",
        genre: ""
    },
    {
        image: "images/songs/like_i_do.jpg",
        title: "Like I Do",
        album: "Like I Do",
        artist: "J. Tajor",
        length: "2:29",
        genre: ""
    },
    {
        image: "images/songs/perfect_night.jpg",
        title: "Perfect Night",
        album: "Perfect Night",
        artist: "LE SERRAFIM",
        length: "2:39",
        genre: ""
    },
    {
        image: "images/songs/baby_powder.jpg",
        title: "Baby Powder",
        album: "Division",
        artist: "Jenevieve",
        length: "2:57",
        genre: ""
    },
    {
        image: "images/songs/feather.jpg",
        title: "Feather",
        album: "emails i can't send fwd:",
        artist: "Sabrina Carpenter",
        length: "3:06",
        genre: ""
    },
    {
        image: "images/songs/tip_toe.jpg",
        title: "Tip Toe",
        album: "Tip Toe",
        artist: "HYBS",
        length: "3:45",
        genre: ""
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
  
  document.addEventListener('DOMContentLoaded', () => renderSongs(songs));