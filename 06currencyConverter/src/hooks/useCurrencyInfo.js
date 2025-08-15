import { useEffect , useState} from "react";

function givesCurrencyData (currency){
    const myPromise = new Promise((res, rej) => {
        const xhttp = new XMLHttpRequest();
        
        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        xhttp.onreadystatechange =  function () {    
            if(this.readyState == 4 ){
                if(this.status == 200)
                {
                    try {
                    const dt =  JSON.parse(this.responseText);
                    res(dt[currency]);
                } catch (error) {
                    const msg = `error in parsing the data + ${error}`;
                    console.log(msg);
                    rej(msg);
                }
                }
                else{
                    const msg = `HTTP Error ${this.status} ${this.statusText}`;
                    console.log(msg);
                    rej(msg);
                }
                
            }
    } 
    xhttp.open("GET",url,true);
    xhttp.send();
    });
    return myPromise;
}
// USAGE FOR givesCurrencyData Function you can Use it
//     givesCurrencyData(currency).then((data)=>{
        //     setData(data);
        //     setError(null);
        // }). catch( (error) => {
        //     setError(error);
        //     setData({});
        // })
async function duplicate(currency) {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data[currency];
    } catch (error) {
        console.error("Error fetching currency data:", error);
        return error;
    }
}

function useCurrencyInfo(currency) {
    /*
        useEffect will automatically fetch function will be called when this 
        hook will be used then useEffect will trigger the action to which it is associated
    */ 
  
   const [data,setData] = useState({});
   const [error,setError] = useState({});
    useEffect(()=>{
        
         (async function fetchData() {
                try {
                const tmp = await duplicate(currency);
                setData(tmp)
                setError(null);
                } catch (error) {
                setData({});
                setError(error.message || "Something went Wrong");
            }
        })()

    },[currency])


    return data;
}

export default useCurrencyInfo;