## Welcome to the new and Improved Itunes!

Okay well maybe its not quite there yet, that's where you come in.

### The Setup

You will notice a file named `SongsService.js` This file has been setup to get information from the itunes server and return a list of songs from whatever is typed into the input field. You can rest assured that this part of the application is fully functional.

You are now being tasked with a few things, first you will need to handle the data that comes back from the service after clicking the `Get Music` Button.

When the user clicks the `Get Music Button` it runs a function in the `SongsController.js` to pass data from the form to `SongService.js` who will retrieve the songs from iTunes, and return them to be mapped to `Song` classes. Once that code is finished it will add those songs to the store. Thus you will not need to modify any of the code regarding this process in the `SongService.js` or the `getMusic function` you will however need to finish the `drawResults` function.

Secondly you will be tasked with allowing users to save their favorite songs to a playlist inside of the BCW Sandbox tool. When a user has a song they like they will need a button to `addSong` to the playlist. They will also need the ability to `removeSong`, and lastly the data for their playlist will need to show up on the page on page reload.

### Step 1 - Where is the Results?

The first thing to focus on will be adding the correct information to the screen. You will be doing this through a `drawResults` function that will need to be setup in `SongsController.js`

> Your `drawResults` function will need to be registerd as a subscriber to the `songs` field in the store

> The `songs` is an `array` of `Song` class objects where you will find an example of in the models folder

It is your responsibility to update the `drawResults` function so the user can actually see the data that is returned from the itunes service.

There are several ways to manipulate the DOM and add these elements. Primarily all of these songs will need to be added to the page I would recommend an easy to target container such as

```html
<div id="song-list">
  <!--SONGS ADDED DYNAMICALLY HERE-->
</div>
```

### Step 2 - Creating and Maintaining Playlists

After you can get data from itunes, you will want to start storing it into the database. A good first start here is make sure you can `getPlaylist`, which when you first start should return an empty array if done right

> Note if you get a list of songs, you may wish to change the name on your sandbox request, as likely another user has already used that one

Once you are getting back the empty array, you will want to start setting up the `addSong` method so that you can start adding things to the database, remember you cannot pass a full object from the HTML to the Controller so you will need to pass the songs id instead.

After that is working you will want to render the the playlist to the page, while this will be similar to your normal song template there will be some differences, mainly the `removeSong` button you will need next.

Lastly you will want to create the `removeSong`, this will need the song id and to fire the delete request from the service.

Here are some ideas of what your app might start out looking like

<div>
  <img class="img-responsive" src="/MobileView.png" />
  <img class="img-responsive" src="/DestopView.png" />
</div>

## Requirements
  - All songs are rendered when search button is clicked
  - Bootstrap is utilized to provide styling to the page
  - Each property of the song object is displayed (title, artist, price, album art, preview (hint: "html audio tag"))
- Functionality:
  - A new search will clear out old results
  - Playlist is automatically rendered on page load
  - Users can add songs to playlist
  - Users can remove songs from playlist

### BONUS CHALLENGES

- Clicking on the title should play the 30 second preview
- The preview must play without opening a new browser window
- Clicking play on a title while another song is already playing will stop the previous song and start the new one
- When you search you will also get movies, try to filter those out

### Finished?

When You are finished please submit the url for your github repo to be graded.