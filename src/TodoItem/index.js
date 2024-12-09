function TodoItem(props) {
  return (
      <li style={{
          background: "black",
          color:'white',
          margin: 25,
          textDecoration: 'none',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'space-between', // Corregido
          alignItems: 'center'
      }}>
          <span
          onClick={props.onComplete}
          >V</span>
          <p className={`p--complete`}>
            {props.Text}
            
            </p>
          <span className={`s--delete`}
          onClick={props.onDelete}
          >X
            
          </span>
      </li>
  );
}

export { TodoItem };
