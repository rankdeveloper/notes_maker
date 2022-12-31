import React from 'react';
import Header from './components/Header';
import './style.css';

export default function App() {
  const [datas, setDatas] = React.useState([
    { id: 1, text: 'Reactjs is popular javascript library', done: false },
    { id: 2, text: 'Jimmy', done: true },
    { id: 3, text: 'David', done: 29 },
    { id: 4, text: 'Williamson', done: false },
  ]);

  return (
    <div className="main">
    {/* <div className='header'> */}
    <Header />
    {/* </div> */}
  

      <div className="container">
        <div className="inputPart">
          <div className="div1">
            <AddTodo setDatas={setDatas} />
          </div>

          <div className="div2">
            <div className="footer">
              <h3>Developed by Rankush</h3>
              <div class="icons">
                <a href="github.com">
                  <i class="fa-brands fa-github"></i>
                </a>

                <a href="linkedin.com">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="displayPart">
          <h2 className="heading">YOUR NOTES</h2>
          <Todolist datas={datas} setDatas={setDatas} />
        </div>
      </div>
    </div>
  );
}

function Todolist({ datas, setDatas }) {
  if (!datas.length) {
    return <p className="p">No todos left!</p>;
  }

  return (
    <div class="items">
      {datas.map((todo) => (
        <div className="item" key={todo.id}>
          {todo.text}
          <span>
            <Delete todo={todo} setDatas={setDatas} />
          </span>
        </div>
      ))}
    </div>
  );
}

function AddTodo({ setDatas }) {
  const inputRef = React.useRef();
  function handle(event) {
    event.preventDefault();
    const text = event.target.elements.addtodo.value;

    const data = {
      id: Math.random(),
      text,
      done: false,
    };

    setDatas((prevData) => {
      return prevData.concat(data);
    });
    inputRef.current.value = '';
  }
  return (
    <>
      <div className="input">
        <form onSubmit={handle}>
          <input
            ref={inputRef}
            type="text"
            name="addtodo"
            placeholder="Enter the data"
            required
          />
          <button type="submit">
            <i class="fa-solid fa-marker"></i>
          </button>
        </form>
      </div>
    </>
  );
}

function Delete({ todo, setDatas }) {
  function handleDeleteTodo() {
    setDatas((prevTodos) => {
      return prevTodos.filter((t) => t.id !== todo.id);
    });
  }

  return (
    <span
      onClick={handleDeleteTodo}
      role="button"
      style={{
        color: '#EB455F',
        fontWeight: 'bold',
        marginLeft: 10,
        cursor: 'pointer',
      }}
    >
      <i class="fa-solid fa-delete-left"></i>
    </span>
  );
}
