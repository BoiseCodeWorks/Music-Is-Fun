export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title
        this.albumArt = data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300")
        this.artist = data.artistName || data.artist
        this.album = data.collectionName || data.album
        this.price = data.trackPrice || data.price
        this.preview = data.previewUrl || data.preview
        this._id = data.trackId || data._id
    }

    get Template() {
        return `
        <div class="card m-3">
        <img class="card-img-top " src="${this.albumArt}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">Artist: ${this.artist}<br> Collection: ${this.album}<br> price: $${this.price}<br></p>
            <audio controls src="${this.preview}"></audio>
            <button class="btn btn-warning" onclick="app.controllers.SongsController.addSong('${this._id}')">Add</button>
        </div>
        </div>
        `
    }

    get playlistTemplate() {
        return `
        <div class="card m-3">
        <img class="card-img-top " src="${this.albumArt}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">Artist: ${this.artist}<br> Collection: ${this.album}<br> price: $${this.price}<br></p>
            <audio controls src="${this.preview}"></audio>
            <button class="btn btn-danger" onclick="app.controllers.SongsController.removeSong('${this._id}')">Delete</button>
        </div>
        </div>
        `
    }
}