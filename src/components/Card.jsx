import React from 'react'

export default function Card({result}) {
    return (
        <div className="card"  key={result.trackId}>
            <div className="card-header">
                <div className="card-img">
                    <img src={result.artworkUrl100} alt=""/>
                </div>
                <div className="card-body">
                    <p className="song-name">{result.trackName}</p>
                    <a target="_blank" href={result.artistViewUrl} className="artist-name">{result.artistName}</a>
                </div>
                </div>
                <div className="player">
                        <audio controls>
                    <source src={result.previewUrl}/>
                </audio>
            </div>
        </div>
    )
}
