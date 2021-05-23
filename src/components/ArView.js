import React, {useState, useEffect} from 'react'
import forest1 from '../assets/ar/1.jpg';
import pan from '../assets/ar/2.jpeg'
import city from '../assets/ar/3.jpg'
import forest2 from '../assets/ar/4.jpg'
import city2 from '../assets/ar/5.jpg'
import ReactPlayer from 'react-player'
import rain from '../assets/rain.mp3'
import { useParams } from 'react-router';


function ARView() {

    const url = useParams();

    const [scene, setscene] = useState(1);
    const [mp3Url, setmp3Url] = useState("")
    
    useEffect(() => {
        const vid = url.url;
       
        setmp3Url(`https://www.youtube.com/watch?v=${vid}`)
        setscene(url.scene);
        // const vId = url.split("=")[1];
        // setImageUrl(`http://img.youtube.com/vi/${vId}/sddefault.jpg`)
    
}, [])

    
    return (        
        <div className="flex">
             <ReactPlayer
                className="absolute z-10"
                url={mp3Url}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            />


            <div className="absolute top-32 bg-gray-900 shadow-md flex z-10">

                <div className="w-20 h-20 rounded-full my-3 mx-10">
                     <img src="https://img.icons8.com/fluent/2x/partly-cloudy-rain.png" className="bg-cover" alt="" />
                </div>
                <ReactPlayer
                    className="mt-12"
                    url={rain}
                    width="200px"
                    height="20px"
                    playing={false}
                    controls={true}
                />

            </div>

             
           
           <a-scene>
           <a-assets>

          
   
                
                <img id="1" src={forest1} />
                <img id="2" src={pan} />
                <img id="3" src={city} />
                <img id="4" src={forest2} />
                <img id="5" src={city2} />
            </a-assets>


            <a-sky id="image-360" radius="10" src={`#${scene}`}> </a-sky>

            <a-entity class="link"></a-entity>


            <a-camera>
                <a-cursor
                id="cursor"
                animation__click="property: scale; from: 0.1 0.1 0.1; to: 1 1 1; easing: easeInCubic; dur: 150; startEvents: click"
                animation__clickreset="property: scale; to: 0.1 0.1 0.1; dur: 1; startEvents: animationcomplete__click"
                animation__fusing="property: scale; from: 1 1 1; to: 0.1 0.1 0.1; easing: easeInCubic; dur: 150; startEvents: fusing"></a-cursor>
            </a-camera>
            </a-scene>
        </div>
    )
}

export default ARView
