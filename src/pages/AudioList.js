import React, {useState, useEffect} from 'react';
import AudioPodcast from '../components/AudioPodcast'
import {useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Audio from './Audio'

function AudioList() {
    const list = [
        {
            id : "1",
            mp3Url: "../assets/harry-styles.mp3",
            imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._yAzxPxW9ZXdr2Bp7Ujh8wHaHQ%26pid%3DApi&f=1",
            artist: "Harry styles",
            title: "Dream With Me"
        }
    ]

    const history = useHistory();
    const [url, seturl] = useState("")

    const navigate = (_id, _mp3Url) => {
        history.push(`/audio-podcast/${_id}`)
    }

    const playonyt = (url) => {
        
        const vid = url.split("=")[1]
        history.push(`/audio/${vid}`)
    }

    return (
        <div>
            <div className="justify-between px-10 md:px-40 lg:px-60 py-24">
                <input type="text" className="bg-purple-white w-80 shadow rounded border-0 p-3" value={url} placeholder="Enter youtube url..." onChange={(e) => {seturl(e.target.value)}}/>
                <div className="bg-midaccent sm:p-3 sm:ml-4 p-2 ml-1 inline-block">
                    <SearchIcon className="text-xl" onClick={() => playonyt(url)}/>
                </div>
            </div>
            {/* <div className="">
                {list.map(item => {
                    return <AudioPodcast key={item.id} navigate={navigate} {...item}/>
                })}
            </div> */}
           
            
        </div>
    )
}

export default AudioList
