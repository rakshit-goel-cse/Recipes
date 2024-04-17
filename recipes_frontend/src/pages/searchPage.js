import React, { useState } from 'react';
import './search.css';
import recipe from './recipe_card';

function Search({Option, setServerStatus}) {
    const [searchText, setsearchText] = useState("");
    const [course,setCourse] = useState('');
    const [diet,setDiet] = useState('');
    const [cuisines,setCuisines] = useState('');
    const [searchData, setSearchData] = useState('');

    const [page, setpage] = useState(1);
    const [totalPage, settotalPage] = useState(0);
    const [offSet,setOffSet] = useState(10);

    const getDataFromServer=()=>{
        console.log("serching data");
        let url="http://192.168.29.231:1234/recipes";
        
        //setSearchData("Searching");

        fetch(url,{
            headers: {
                'Accept': 'application/json'
              }
            ,parameters:{
                'Course':course,
                'Diet':diet,
                'Cuisine':cuisines,
                'SearchText':searchText
            }
        })
        .then(response=>{
            if(!response.ok){
                //setSearchData("Error searching");
            }
            else{
                return response.json();
            }
        })
        .then(data=>{
            //console.log("search data- "+JSON.stringify(data));
            //let dataList=JSON.parse(data);
            setSearchData(data);
            settotalPage(data.length/offSet);
        })
        .catch(error=>{
            setSearchData('');
            console.error(error);
            setServerStatus("error");
        })
    }

    const optionElement=(options,state,setState,id,heading)=>{
        return(
            <select key={id} value={state} onChange={(event)=>setState(event.target.value)}>
            <option value="">{heading}</option>
            {options.map((value,index)=>{
                return(<option key={index} value={value}>{value}</option>)
            })}
          </select>
        );
    }

    return(
        <div >

            <div>
            {Option && Option.diet && optionElement(Option.diet, diet , setDiet ,1,"Diet")}
            {Option && Option.course && optionElement(Option.course, course , setCourse ,2,"Course")}
            {Option && Option.cuisines && optionElement(Option.cuisines, cuisines , setCuisines ,3,"Cuisines")}
            </div>
            
            <input className='search' type="text" onChange={(event)=>setsearchText(event.target.value)} value={searchText} placeholder="Search keywords"></input>
            
            <input type='submit' onClick={getDataFromServer}/>

        </div>
    );
}

export default Search;