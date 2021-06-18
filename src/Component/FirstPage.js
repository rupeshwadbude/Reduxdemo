import React, { Component } from 'react';
import { Form, Button  } from 'react-bootstrap';
import {connect} from 'react-redux';
import {firstsubmit} from '../Redux/Action'
import SecondPage from './SecondPage';

class FirstPage extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            firstname: " ",
            lastname: " ",
            dob: " ",
            marital_status: "",
           
        }
        this.state = this.initialState;
       
    }

    handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        const add_Data = this.state;
       
        this.props.AddUser(add_Data);

        this.props.history.push('/second')
    
    }
  
    render() {
        return (
            <div className="container">
            <div >
            <div className="row col-sm-9 offset-md-3 p-5" >

                <Form className="col-sm-9 main_div" onSubmit={this.handleSubmit}>
                    <h1 className="col-12 col-md-7 mb-3 offset-md-2">FirstPage</h1>
                    <hr></hr>
                    <Form.Group controlId="formBasicname" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicLastName" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName"  name="lastname"
                            value={this.state.lastname}
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDateofbirth" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control type="date"  name="dob"
                            value={this.state.dob}
                            onChange={this.handleChange}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicCountry" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Marital Status</Form.Label>
                        <Form.Control type="text" placeholder="Country"  name="marital_status"
                            value={this.state.marital_status}
                            onChange={this.handleChange}/>
                    </Form.Group>



                    <div className="col-12 col-md-7 mb-3 offset-md-2">
                   <Button  variant="primary" type="submit"  >
                            Submit
                     </Button>
                    </div>

                </Form>
            </div>
        </div>
        <div className="d-none">
            <SecondPage  data={{fdata:this.state}}/>
        </div>
      </div>
    )
}

}
const mapStateToProps = (state) => {
    
    return {
        data: state.firstdata
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (add_Data) => dispatch(firstsubmit(add_Data)),
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (FirstPage);