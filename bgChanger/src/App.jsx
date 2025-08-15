import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")
  return (
      <div className="w-full h-screen duration-300"
      style={{backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}
            >Red</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "Green"}}
            onClick={() => setColor("Green")}
            >Green</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "Yellow"}}
            onClick={() => setColor("Yellow")}
            >Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "Blue"}}
            onClick={() => setColor("Blue")}
            >Blue</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "Violet"}}
            onClick={() => setColor("Violet")}
            >Violet</button>
            </div>
            
        </div>
      </div>
  )
}

export default App
