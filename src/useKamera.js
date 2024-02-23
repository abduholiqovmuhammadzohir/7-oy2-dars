import { useEffect, useRef, useState } from "react"


export default ()=>{
    const vidyoRef=useRef(null);
    const [imgs, setImg]=useState(null);
    const canvs=useRef(null);

    useEffect(()=>{
        if (!imgs) {
            const video=vidyoRef.current;
            navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then((stream) => {
              video.srcObject = stream;
              video.play();
            })
            .catch((err) => {
                console.log('x');
              console.error(`An error occurred: ${err}`);
            });
        }
    }, [imgs])

    function takepicture() {
        const canvas=document.getElementById('cns')
        const video=vidyoRef.current;
        const context = canvas.getContext("2d");
          canvas.width = 350;
          canvas.height = 260;
          context.drawImage(video, 0, 0, 340, 260);
    
          const data = canvas.toDataURL("image/png");
          setImg(data)
      }

      var download = function(){
        var link = document.createElement('a');
        let nom= new Date();
        const dom=nom.getDay()+'-'+(+nom.getMonth()+1)+'-'+nom.getFullYear()+'_'+nom.getHours()+'-'+nom.getMinutes()+'-'+nom.getSeconds();
        link.download = `img`+dom+`.png`;
        link.href = imgs;
        link.click();
      }

    return (
     {
        vidyoRef,
        imgs,
        canvs,  
        takepicture,  
        setImg,
        download,
    }
    )
}