
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Task from './Components/Tasks';
import axios from 'axios';

import { Component, } from 'react';

class App extends Component {
  state = {
    items: [],
    text: ""
  }
  showTask = () => {
    axios.get('http://127.0.0.1/api/list/')
      .then((res) => {
        this.setState({ items: res.data })
      })
  }
  CreateTask = (d) => {
    if (this.state.text !== '') {
      axios.post('http://127.0.0.1/api/create/', d)
        .then((res) => {
          this.setState({ text: '' })
          this.showTask()
        })
    }

  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    let dt = { items: this.state.text }
    this.CreateTask(dt)
  }
  handleDelete = id => {
    axios.delete(`http://127.0.0.1/api/delete/${id}`)
      .then((res) => {
        this.showTask()
      })
  }
  componentDidMount() {
    this.showTask();

  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='raw'>
          <div className='col-sm-6 mx-auto text-white shadow-lg padding-p4'>
            <h2 className='text-center'>Today's Task</h2>
            <br /><br />

            <div className='raw'>
              <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Your Task..' value={this.state.task} onChange={this.handleChange} />&nbsp;&nbsp;
                <div className='col-2'>
                  <button type='submit' className='btn btn-success px-5 font-weight-bold' onClick={this.handleAdd}>Save</button>
                </div>
              </div>
              <br />
              <div className='container-fluid'>
                <ul className='list-unstyled raw m-5'>
                  {
                    this.state.items.map((value, i) => {
                      return <Task key={i} id={value.id} value={value.items} sendData={this.handleDelete} />
                    }
                    )
                  }

                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  };
}

export default App;
