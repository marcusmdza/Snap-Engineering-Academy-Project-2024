# Music Catalog Website

Hi there! 👋 Welcome to my project for the Snap Engineering Academy 2024. This repository contains the code for my dynamic Music Catalog website project that allows users to view and interact with a collection of songs. Currently, the songs in this project are based off my own music. I hope you enjoy my project! 

You can visit [my project here](https://marcusmdza.github.io/Snap-Engineering-Academy-Project-2024/).

## Features

- **Data-Driven**: The site is powered by an array of song objects contained within the `script.js` file. This data-driven approach means that any changes to the song array — such as adding or removing songs — will be reflected on the website upon refresh.

- **Dynamic Content**: The song data is dynamically loaded into the webpage, allowing for a flexible and interactive user experience.

- **Multiple Sorting and Filtering Options**: Users can interact with the song data in various ways:
  - **Alphabetical Sorting by Title**: Songs can be sorted alphabetically by their title.
  - **Alphabetical Sorting by Album**: Users can also sort songs based on the album name.
  - **Genre Filtering**: A set of genre-based buttons lets users filter songs by their genre.
  - **Live Search Bar**: The search bar provides a live search feature that filters songs as the user types, offering a responsive way to find specific tracks.

## How It Works

The core functionality of the site is managed through a series of JavaScript functions that manipulate the song data array. These functions handle sorting, filtering, and dynamically rendering the content based on user interactions. The page does not need to reload to reflect changes, providing a seamless experience.

## Manipulating Data

The songs are represented as objects within an array. Here's an example structure of a song object:

```javascript
{
  image: 'path/to/image.jpg',
  title: 'Song Title',
  album: 'Album Name',
  artist: 'Artist Name',
  length: 'Song Length',
  genre: 'Music Genre'
}
```

## Resources & Credit

- For overall design I used [Canva](https://www.canva.com/design/DAGBreXa514/cYIVHY8FonPr8om_veIrUw/view?mode=prototype) to plan out my website. Spotify was used a lot as a reference for the project.
- Once I had the design, I used webflow to get a basic understanding of the HTML structure, and used some of their CSS themes.
- One resource I used a lot is [w3schools](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) for the Javascript, and HTML/CSS styling.

