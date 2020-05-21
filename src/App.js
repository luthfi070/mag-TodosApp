import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

var todos = []

todos.push({id: 1, nama: 'belajar', status: 'belum selesai'});
todos.push({id: 2, nama: 'kuliah', status: 'belum selesai'});
todos.push({id: 3, nama: 'sekolah', status: 'belum selesai'});
todos.push({id: 4, nama: 'makan', status: 'belum selesai'});



export class App extends React.Component{
  constructor(){
    super();
    this.state = {value : ''};
    this.sayHello = this.sayHello.bind(this);
    this.teken = this.teken.bind(this);
    this.done = this.done.bind(this);
    this.remove = this.remove.bind(this);
  }

  sayHello(event) {
    this.setState({value: event.target.value})
  }

  teken(event){
    this.setState({nama: event.target.value});
    const angka = todos.length;
    todos.push({id: angka+1, nama: this.state.value, status: 'belum selesai'});
    event.preventDefault();
  }

  done(event){
    var index = todos.findIndex(p => p.nama === event.target.value)
    todos.splice(index, 1)
    const angka = todos.length;
    this.setState({nama: event.target.value})
    const ubah = parseInt(event.target.name)
    todos.push({id: ubah, nama: event.target.value, status: 'selesai'});
    const find = todos.hasOwnProperty(event)
    if (find){
      this.setState({stat: find})
    }else{
      this.setState({stat: find})
    }
  }

  remove(event){
    var index = todos.findIndex(p => p.nama === event.target.value)
    console.log(event.target.value)
    console.log(todos)
    todos.splice(index, 1)
    this.setState({hapus: "terhapus" + event.target.value})
    event.preventDefault();
  }

render(){
  return(
    <div className="App">
      <div className="Navbar">
        <form onSubmit={this.handleSubmit}>
        <nav className="navbar navbar-dark bg-dark rounded-pill col-sm-8">  
          <input type="text" value={this.state.value} onChange={this.sayHello} className="form-control form-control-sm col-sm-6 rounded-pill" name="aktivitas"></input>
          <button className="btn form-control form-control-sm col-sm-4 bg-light rounded-pill" onClick={this.teken}>
            Tambah 
          </button>
        </nav>
        </form>
      </div>
      <br></br><br></br>
      <div className="Kartu card">
        <ul className="list-group list-group-flush"> 
              {todos.map(todos => 
              {if(todos.status === "belum selesai")
                return(
                  <li className="list-group-item">
                  {todos.nama} 
                  <button value={todos.nama} name={todos.id} className="btn form-control form-control-sm col-sm-4 bg-success rounded-pill" onClick={this.done}>
                    Done 
                  </button>
                  <button value={todos.nama} name={todos.id} className="btn form-control form-control-sm col-sm-5 bg-danger rounded-pill" onClick={this.remove}>
                    Remove
                  </button>
                  </li>
                );
                else
                return(
                  <li className="list-group-item">
                  <s>{todos.nama}</s> 
                  </li>
                );
              }
              )}
        </ul>
      </div>
      <br/>
    </div>
  );
}



}


export default App;
