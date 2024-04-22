
import Search from './pages/Search.js';
import { useEffect, useState } from 'react';

function App() {

  const [options, setoptions] = useState([]);
  const [serverStatus, setServerStatus] = useState("Wait");

  useEffect(() => {
    const fetchData=()=>{
      let url='http://192.168.29.231:1234/options';
  
      fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response=>{
        // Check if response is okay
      if (!response.ok) {
        setServerStatus("error");
        throw new Error('Network response was not ok');
      }
      // Parse response body as JSON and return the parsed data
      else{
        setServerStatus("OK");
        return response.json();
      }
    })
      .then(data=>{
        setoptions(data);
      })
      .catch(error=>{
        setServerStatus("error");
        console.error(error);
      })
    }

    
      fetchData();
    
  }, [])
  
  const callPages=()=>{
    if(serverStatus==="Wait"){
      return <view style={{color:"green"}}>Wait</view>;
    }
    else{
      if(serverStatus==="error"){
        return <view style={{color:"Red"}}>Error</view>;
      }
      else{
        return <Search Option={options} setServerStatus={setServerStatus}/>;
      }
    }
  }

  return (
    <>
      {callPages()}
    </>
  );
}

export default App;
