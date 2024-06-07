import { useEffect, useState } from "react"
function ColorPage() {
    const [typeofColor , setTypeofColor] = useState("HEX");
    const [color , setColor] = useState("#000");
    const rendomnum =(length)=>
        {
          return  Math.floor(Math.random() * length)
        }
    const HandleHexColor = ()=>{

       const hexColor =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
       let hex = "#";

       for (let i = 0; i < 6; i++) {
        hex += hexColor[rendomnum(hexColor.length)];
      }
    //   console.log(hex);
      setColor(hex);
    }

    const HandleRgbColor=()=>{
        let r = rendomnum(256);
        let g = rendomnum(256);
        let b= rendomnum(256);
    //   console.log(`RGB (${r},${g},${b})`);
       setColor(`RGB(${r},${g},${b})`);
    }

    useEffect(()=>{
        typeofColor === "HEX" ? HandleHexColor() : HandleRgbColor();
    },[typeofColor])
  return (
    
    <div className="container" style={{backgroundColor:color}}>
        <div className="color-btn">
            <button onClick={()=>setTypeofColor("RGB")}> Create RGB Color</button>
            <button onClick={()=>setTypeofColor("HEX")}> Create HEX Color</button>
            <button onClick={typeofColor === "HEX" ? HandleHexColor : HandleRgbColor}> Rendom Color Generator</button>
        </div>
        <div className="text-type" >
            <p>{typeofColor === 'HEX' ? "HEX Color" : "RGB Color" }</p>
            <p>{color}</p>
        </div>
    </div>
  )
}

export default ColorPage
