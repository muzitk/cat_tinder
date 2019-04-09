import React, { Component } from 'react';
import {
  FormControl, FormLabel
} from 'react-bootstrap'


class NewCat extends Component {
    constructor(props){
      super(props)
      this.state = {
        form:{
          name: '',
          age: '',
          enjoys: ''
        }
      }
    }

    handleChange(event){
        let {form } = this.state
        form[event.target.name] = event.target.value

        this.setState({form: form})
    }



    render() {
        let {handleCreateCat} = this.props
      return (
    <div>

            <div>
                <FormLabel id="name">Name
                <FormControl
                  type="text"
                  name="name"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.form.name}
                />
                </FormLabel>
            </div>

            <div>
                <label id='age'>Age
                <FormControl
                type="text"
                name="age"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.age}
                />
                </label>
            </div>

            <div>
                <label id= 'enjoys'>Enjoys
                <FormControl
                type="text"
                name="enjoys"
                onChange={this.handleChange.bind(this)}
                value={this.state.form.enjoys}
                />
                </label>
            </div>


            <div>
            <button onClick={()=> handleCreateCat(this.state.form)} type="button">
             Create a New Cat
             </button>
            </div>
    </div>
      );
    }
    }













export default NewCat;
