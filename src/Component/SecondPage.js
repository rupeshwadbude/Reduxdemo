import React, { Component } from 'react';
import { Form, Button  } from 'react-bootstrap';
import {connect} from 'react-redux'
import {secondsubmit} from '../Redux/Action'

class SecondPage extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            firstname: " ",
            lastname: " ",
            dob: " ",
            marital_status: "",
            Address: " ",
            Country: " ",
            City: " ",
            District: ""
           
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
        console.log("Second",add_Data)
        this.props.AddUser(add_Data);
        
       
        this.props.history.push('/third')
    
    }
    componentDidMount(){
        console.log("Props",this.props)
        console.log("secondDATA",this.props.data)
        
        this.setState({firstname:this.props.data.firstname})
        this.setState({lastname:this.props.data.lastname})
        this.setState({dob:this.props.data.dob})
        this.setState({marital_status:this.props.data.marital_status})
      
    }
    render() {
        console.log("Props",this.props.data)
        return (
            <div className="container">
            <div >
            <div className="row col-sm-9 offset-md-3 p-5" >

                <Form className="col-sm-9 main_div" onSubmit={this.handleSubmit}>
                    <h1 className="col-12 col-md-7 mb-3 offset-md-2">SecondPage</h1>
                    <hr></hr>
                    <Form.Group controlId="formBasicname" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  name="Address"
                            value={this.state.Address}
                            onChange={this.handleChange}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicLastName" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" placeholder="Enter LastName"  name="Country"
                            value={this.state.Country}
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasic" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter City"  name="City"
                            value={this.state.City}
                            onChange={this.handleChange}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicCountry" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="text" placeholder="Country"  name="District"
                            value={this.state.District}
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
      </div>
    )
}

}
const mapStateToProps = (state) => {
    
    return {
        data: state.FormData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (add_Data) => dispatch(secondsubmit(add_Data)),
      
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (SecondPage);