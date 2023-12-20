import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData(){
    const[data,setdata]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const fetchAPI = async ()=>{
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                const result = await response.json();
                setdata(result)
            }catch(error){
                setError(error)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchAPI();
    },[])
    const divStyle = {
        color: 'black',
        backgroundColor: 'lightgray',
        padding: '10px 9px',
        border: '1px solid darkgray',
        borderRadius: '5px',
        margin:'5px'
      };
    return (
        <div>
          {loading && <p>Loading.....</p>}
          {error && <p>Error: {error.message}</p>}
          {data && (
            data.slice(0,5).map((content) => (
              <div key={content.id} style={divStyle}>
                <h4>{content.id}</h4>
                <p>{content.title}</p>
              </div>
            ))
          )}
        </div>
      );
};

export default FetchData