import React from 'react'

import useKamera from "../../useKamera";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FastRewindIcon from '@mui/icons-material/FastRewind';

function About() {

    const { vidyoRef, takepicture, imgs, setImg, download } = useKamera();

    function Hendl() {
      if (imgs) {
        setImg(null)
      } else { takepicture() }
    }

    return (
        <>
            <div className="container">
                <div className="rasm">
                    {imgs ? <img src={imgs} alt="" className="rasm1" /> : <video ref={vidyoRef} className="rasm2"></video>}

                    <div className="btn">
                        <button className="bt1" onClick={Hendl}>{!imgs ? <CameraAltIcon></CameraAltIcon> : <FastRewindIcon></FastRewindIcon>}</button>
                        {imgs ? <button className="bt1" onClick={download}><SaveAltIcon></SaveAltIcon></button> : ''}
                    </div>
                </div>
                <div className="hdn">
                    <canvas id="cns"></canvas>
                </div>
            </div>
        </>
    )
}

export default About