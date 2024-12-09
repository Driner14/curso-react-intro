import React from 'react'
function useLocalStorage(itemName,initialValue) {
    const [item,setItem]= React.useState(initialValue);

    const [loading,setLoading]= React.useState(true);
    const [error,setError]= React.useState(false);


    React.useEffect(()=>{

      setTimeout(() => {
        try {
          const localStorageTodos = localStorage.getItem(itemName);
  
          let parseTodos; 
          if (!localStorageTodos) {
            localStorage.setItem(itemName, JSON.stringify(initialValue ));
            parseTodos = [];
          } else {
            parseTodos = JSON.parse(localStorageTodos);
            setItem(parseTodos);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);

    },[]);
    
 
  
  
    const saveItem = (newTodos) => {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    };
    return {  
       item,
      saveItem,
      loading,
      error
    }
    
  }

  export {useLocalStorage}