import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View ,Text, TextInput, Button, TouchableWithoutFeedback} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import ShowDataHeads from "./ShowDataHeads";



const GetPicker=(data,val,setval,msg='')=>{
   const [open, setopen] = useState(false);
   
   return(
        <DropDownPicker
      open={open}
      placeholder={msg?msg:"Select an Item"}
      value={val}
      items={[
        {label: '---- No Selection----', value: null},
       ...data.map((value)=>(
        {label: value , value: value ,containerStyle:val===value?{backgroundColor:'gray'}:''} 
         ))
        ]}
      setOpen={setopen}
      setValue={setval}
      containerStyle={{width:"80%" }}
    />
    )
}

function SearchPage({options}) {

    const [course, setcourse] = useState('');
    const [diet, setdiet] = useState("");
    const [cuisines, setcuisines] = useState("");
    const [text,setText] = useState("");

    const [opencourse, setopencourse] = useState(false);
    const [opendiet, setopendiet] = useState(false);
    const [opencuisines, setopencuisines] = useState(false);

    const [pageRender,setPageRender] =useState("search");
//console.log("data cousre- ",options["cuisines"] );

const searchPageFunc=()=>{
  return(
<TouchableWithoutFeedback
onPress={() => {
        setopencourse(false);
        setopendiet(false);
        setopencuisines(false);
    }}>
<View style={styles.container}>
    <View style={{alignItems:"center",flex:2}} >
        
        {options["course"] &&
        <DropDownPicker
        open={opencourse}
        placeholder={"Select the Course"}
        value={course}
        items={[
          {label: '---- No Selection----', value: null,labelStyle:{fontWeight:"bold"}},
         ...options["course"].map((value)=>(
          {label: value , 
            value: value ,
            containerStyle:course===value?{backgroundColor:'gray'}:''} 
           ))
          ]}
        setOpen={setopencourse}
        setValue={setcourse}
        style={{backgroundColor:"red"}}
        containerStyle={{width:"80%", zIndex: 4 ,marginTop:10}}
        scrollViewProps={{ scrollEnabled: true }}
        listMode="MODAL"
        />
        }

        {options["diet"] &&
        <DropDownPicker
        open={opendiet}
        placeholder={"Select the Diet"}
        value={diet}
        items={[
          {label: '---- No Selection----', value: null, labelStyle:{fontWeight:"bold"}},
         ...options["diet"].map((value)=>(
          {label: value , 
            value: value ,
            containerStyle:diet===value?{backgroundColor:'gray'}:''} 
           ))
          ]}
        setOpen={setopendiet}
        setValue={setdiet}
        containerStyle={{width:"80%", zIndex: 3 ,marginTop:10}}
        listMode="MODAL"
        />
        }
        {console.info(options["cuisines"])}
        {options["cuisines"] && 
        <DropDownPicker
        open={opencuisines}
        placeholder={"Select the Cuisines"}
        value={cuisines}
        items={[
          {label: '---- No Selection----', value: null, labelStyle:{fontWeight:"bold"}},
         ...options["cuisines"].map((value)=>(
          {label: value , 
            value: value ,
            containerStyle:cuisines===value?{backgroundColor:'gray'}:''} 
           ))
          ]}
        setOpen={setopencuisines}
        setValue={setcuisines}
        containerStyle={{width:"80%", zIndex: 2 ,marginTop:10}}
        listMode="MODAL"
         />
        }

    </View>
    <TextInput style={{flex:4,margin:10, textAlign:"center",
            width:"85%", borderColor:"black",
            borderRadius:50, borderWidth:2,
            fontSize:25, fontVariant:['tabular-nums'],
            padding:15, backgroundColor:'white'}}
        multiline={true}
        placeholder="Type Search Text"
        editable={!opencourse && !opencuisines && !opendiet}
        value={text}
        onChangeText={setText}
    ></TextInput>
    <View style={{flex:1,justifyContent:"center",width:"50%"}}>
        <Button  title="Button" onPress={()=>setPageRender("dataHeads")}></Button>
    </View>
</View>
</TouchableWithoutFeedback>
)
}

const callheadPage=()=>{
  return(
    ShowDataHeads(course,diet,cuisines,text)
  )
}

return(
  <>
  {pageRender === "search" &&
    searchPageFunc()
  }
  {pageRender === "dataHeads" &&
     <ShowDataHeads data={[course,diet,cuisines,text,setPageRender]}/>   
  }
</>
)

}

export default SearchPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      width:"100%"
    },
  });