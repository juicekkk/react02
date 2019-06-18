// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
      name: ''
    }
    handleChange = (e) => {
      this.setState({
        name: e.target.value
      })
    }
    handleNumChange = (e) => {
    this.setState({
            num: e.target.value
        })
    }
    handleNumAdd = (e) => {
    this.setState({
            name : 0,
            num: 0
        })
    }

    render() {
      return (
        <form>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            placeholder="전화번호"
            value={this.state.num}
            onChange={this.handleNumChange}
          />

          <div>{this.state.name} {this.state.num}</div>
          <button onClick={this.handleNumAdd}>추가</button>
        </form>
      );
    }
  }
  
  export default PhoneForm;