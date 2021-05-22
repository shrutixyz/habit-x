import React from 'react'

function AudioPodcast({id, imgUrl,artist,title, mp3Url, navigate}) {
    
    return (
        <div  className="flex w-full shadow-md  align-middle max-w-3xl m-auto bg-gray-50" onClick={() => navigate(id, mp3Url)}>
           <div className="w-32 h-32 bg-p mx-7">
               <img src={imgUrl} className="bg-contain" alt="" />
           </div>
           <div className=" flex-col justify-center">
               <p className="mt-3 font-medium font-gray-400 text-2xl my-auto">{title}</p>
               <p>{artist}</p>
           </div>
        </div>
    )
}

export default AudioPodcast
