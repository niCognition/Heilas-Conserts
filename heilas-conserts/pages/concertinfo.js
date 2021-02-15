import React from 'react'
import TopBanner from '../components/topbannercomponent.js'

export default function ConcertInfo() {
    return (
        <div>
            <TopBanner />
            <h1>This is the concertInfo page</h1>

            <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    )
}