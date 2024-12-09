function TodoList(props) {
    return (
      <ul style={{
         
         listStyleType: 'none' // Convertido a camelCase
     }}>
        {props.children}
     </ul>
    );
  }
  export  {TodoList} 