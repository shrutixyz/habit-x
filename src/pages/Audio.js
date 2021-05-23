import React, {useState, useEffect} from 'react'
import rain from '../assets/rain.mp3'
import harry from '../assets/harry-styles.mp3'
import waves from '../assets/waves.mp3'
import ReactPlayer from 'react-player'
import {useParams, useHistory} from 'react-router-dom';


function Audio() {

    const [imageUrl, setImageUrl] = useState("");
    const [mp3Url, setmp3Url] = useState("");
    const [scene, setscene] = useState(1);

    const url = useParams();
    const history = useHistory();
    useEffect(() => {
        const vid = url.url;
        setImageUrl(`http://img.youtube.com/vi/${vid}/sddefault.jpg`)
        setmp3Url(`https://www.youtube.com/watch?v=${vid}`)
        // const vId = url.split("=")[1];
        // setImageUrl(`http://img.youtube.com/vi/${vId}/sddefault.jpg`)
    
}, [])

    const enableAr = () => {
        history.push(`/ar/${url.url}/${scene}`)
    }

   

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

                

                <div className="ml-8 mt-4 bg-gray-800 shadow-md p-4">

                    <p className="text-white">Enter a scene number between 1-5</p>
                    <input type="number" className="bg-purple-white mt-10 w-20 h-14 shadow rounded border-0 px-3 mx-3" value={scene} placeholder="Enter a number between 1-5" onChange={(e) => {setscene(e.target.value)}}/>
                    <button className="bg-fr rounded-3xl mt-10 text-white px-5 py-2" onClick={enableAr}>Enable AR Enviornment</button>

                </div>


           </div>
           
            
            
        </div>
    )
}

export default Audio
