import { useCallback, useState , useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let copyMeButtonStyle = "outline-none  bg-emerald-700 text-white px-3 py-0.5 shrink-0";
  let copyMeButtonStyle2 = "outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0";
  // set reference
  const passwordRef = useRef(null);
  const copyMeButtonRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    copyMeButtonRef.current.className = copyMeButtonStyle;
  },[password])

  const passwordGenerator = useCallback(() =>
  {
    copyMeButtonRef.current.className = copyMeButtonStyle2;
    copyMeButtonStyle = "outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0";

    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      str += "0123456789";
    }
    if (charAllowed) {
      str  += "!@#$%^&*()_+[]{}|;:,.<>?";
    }
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * (str.length)) + 1;
      if(randomIndex < str.length  && randomIndex >= 0)
          pass += str[randomIndex];
      else 
          pass += str[i]; // Fallback to first character if index is out of bounds
    } 
    setPassword(pass);
  }, [length , number , charAllowed , setPassword])
  
  useEffect(() => {
    passwordGenerator();
  },[length, number, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>
          <h1 className='text-white text-center text-3xl'> Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50'>
            <input type="text" 
              value={password}
              className='outline-none w-full px-3 py-1'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button className = {copyMeButtonStyle2}
            onClick={copyPasswordToClipboard}
            ref={copyMeButtonRef}>
              Copy
            </button>
          </div>
          <div className='flex text-sm gap-x-2'>  
            <div className='flex items-center gap-x-1'>
              <input type="range" 
                min ={6}
                max ={50}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className='cursor-pointer'
                
              />
              <label>Length: {length}</label>
            <div className='flex items-center gap-x-1'></div>
              <input type="checkbox"
                  defaultChecked={number}
                  id="numberInput"
                  onChange={ () => {
                    setNumber((prev) => !prev);
                  }}
              />
              <label>Numbers</label>
              <input type="checkbox"
                  defaultChecked={number}
                  id="numberInput"
                  onChange={ () => {
                    setCharAllowed((prev) => !prev);
                  }}
              />
              <label>Characters</label>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
