import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './App.css';
import SearchPage from './pages/SearchPage.js';

export default function App() {

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
      return(()=>{
        setServerStatus('');
        setoptions('');
      })
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      {serverStatus==="Wait" && 
        <ActivityIndicator size="large" color="#3498db" />
      }
      {console.log("option data in app- ",serverStatus,Object.keys(options))}
      { serverStatus==="OK" && Object.keys(options).length>0 &&
        <SearchPage options={options}/>
      }
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
