
import './App.css';

function App() {
  const name ='태의'
  const list = ['apple', 'banana', 'orange']
  return (
    <>
     <h1 className='orange'>{name}</h1>
     <h2>Hello! </h2>

     <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <img
      style={{width: '200px', height: '200px'}}
        src="https://images.unsplash.com/photo-1708958485683-85ef0ecd24ff?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
      />

    </>
  );
}

export default App;
