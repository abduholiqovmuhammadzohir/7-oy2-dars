import React, { useState } from 'react';
import Webcam from 'react-webcam';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useDispatch } from "react-redux";
import Alert from '@mui/material/Alert';

const CameraApp = () => {
    const [capturedImage, setCapturedImage] = useState(null);
    const webcamRef = React.useRef(null);
    const dispatch = useDispatch();

    const capture = React.useCallback(() => {
        confirm("Rasim saqlansimi")
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
        dispatch({ type: "ADD", payload: imageSrc });
    }, [webcamRef, setCapturedImage, dispatch]);

    return (
        <div className='containeres'>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={500}
            />
            <br />
            <button className='button' onClick={capture}>
                <CameraAltIcon />
            </button>       
        </div>
    );
};

export default CameraApp;
