import React, {useEffect, useState} from 'react';
import '../Style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Tempapp = () => {

const [city ,setCity] = useState(null);
const [search,setSearch] = useState("Allahabad");

useEffect( ()=> {
  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=62d5bc5e7f41b7a98cdba991db36acca`
      const response = await fetch(url);

      const resJson = await response.json();

      setCity(resJson.main);
  };

  fetchApi();
},[search] )

  return (
    <div>
      <div className='container'>
      <h1 className='heading'>Weather App</h1>
       <div className='box'>
          <div className='inputData'>
             <input 
              type="search" 
              className='inputFeild' 
              value={search}
              onChange={(event)=> {setSearch(event.target.value) } }/>
          </div>

          {!city ? (
            <span>No Data Found</span>
          ) : (
            <div>
            <div className='info'>
            <h2 className='loc'>
            <FontAwesomeIcon icon="fa-regular fa-street-view" />{search}
            </h2>
            <h1 className='temp'>
              {city.temp} °Cel 
            </h1>
            <h3 className='temp_max_min'>
                Min:{city.temp_min} °Cel || Max:{city.temp_max} °Cel
            </h3>
          </div> 
          </div> 
          )}  
       </div>
       </div>
    </div>
  )
}

export default Tempapp
