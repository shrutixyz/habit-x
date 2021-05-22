import React, {useState, useEffect} from 'react'
import rain from '../assets/rain.mp3'
import harry from '../assets/harry-styles.mp3'
import waves from '../assets/waves.mp3'
import ReactPlayer from 'react-player'
import {useParams} from 'react-router-dom';

function Audio() {

    const [imageUrl, setImageUrl] = useState("")
    const [mp3Url, setmp3Url] = useState("")
    const url = useParams()

    useEffect(() => {
        const vid = url.url;
        setImageUrl(`http://img.youtube.com/vi/${vid}/sddefault.jpg`)
        setmp3Url(`https://www.youtube.com/watch?v=${vid}`)
        // const vId = url.split("=")[1];
        // setImageUrl(`http://img.youtube.com/vi/${vId}/sddefault.jpg`)
    
}, [])

   

    return (
        <div className="bg-gray-900 h-screen w-100 flex justify-center">
           
           <div className="">
           <img className="m-auto" src={imageUrl} alt="" />
            {/* <ReactPlayer
                url={rain}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            /> */}
            <div className="mt-8 mx-auto w-96">
{/* 
                <h1 className="text-white text-3xl text-center mb-2"> Dream With me</h1>
                <h4 className="text-gray-200 mb-5 text-center">Harry Styles</h4> */}

                <ReactPlayer
                className="-"
                url={mp3Url}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            />

            </div>

           </div>
           <div className="">
                <div className="flex align-middle justify-center">

                    <div className="w-20 h-20 rounded-full my-3 mx-10">
                        <img src="https://img.icons8.com/fluent/2x/partly-cloudy-rain.png" className="bg-cover" alt="" />
                        </div>

                    <div className="mt-10">
                            <ReactPlayer
                            className="-"
                            url={rain}
                            width="200px"
                            height="20px"
                            playing={false}
                            controls={true}
                        />
                    </div>



                </div>

                <div className="flex align-middle justify-center">

                    <div className="w-20 h-20 rounded-full my-3 mx-10">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FniB%2FRLE%2FniBRLEp9T.png&f=1&nofb=1" className="bg-cover" alt="" />
                        </div>

                    <div className="mt-10">
                            <ReactPlayer
                            className=""
                            url={waves}
                            width="200px"
                            height="20px"
                            playing={false}
                            controls={true}
                        />
                    </div>



                </div>


           </div>
           
            
            
        </div>
    )
}

export default Audio
