import React, {  useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([{id: 9999}]);
  const [dataPage, setDataPage] = useState([]);



  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:3001"
    ).then((response) => response.json());
      console.log('12', response);
          setData(response);

  };

  useEffect(() => {
    getApiData();
    console.log('w21', data);
    
  }, []);
console.log('21', data);

      
      
      
      
      

        return (
<>
<div>
  {data?.map((el: any) => {
    return (
      <div>

        {el.id}
      </div>
    )
  })}
</div>

</>
        ) 
        
      
}

export default App;
