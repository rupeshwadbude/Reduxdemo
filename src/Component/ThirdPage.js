import React, { Component } from 'react';
import { Form, Button  } from 'react-bootstrap';
import {connect} from 'react-redux';
import {thirdsubmit} from '../Redux/Action'

class ThirdPage extends Component {
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
            District: "",
            Degree: " ",
            College: " ",
            Year: " ",
            
        
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

        this.setState(this.initialState);
        this.props.history.push('/show')
    }
    componentDidMount(){
        console.log("third",this.props.data)
        this.setState({firstname:this.props.data.firstname})
        this.setState({lastname:this.props.data.lastname})
        this.setState({dob:this.props.data.dob})
        this.setState({marital_status:this.props.data.marital_status})
        this.setState({Address:this.props.data.Address})
        this.setState({Country:this.props.data.Country})
        this.setState({City:this.props.data.City})
        this.setState({District:this.props.data.District})
     
    }

    render() {
        return (
            <div className="container">
               
            <div >
            <Button href="/show">ShowData</Button>
            <div className="row col-sm-9 offset-md-3 p-5" >

                <Form className="col-sm-9 main_div" onSubmit={this.handleSubmit}>
                    <h1 className="col-12 col-md-7 mb-3 offset-md-2"> ThirdPage</h1>
                    <hr></hr>
                    <Form.Group controlId="formBasicname" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control as="select"
                                name="Degree"
                                onChange={this.handleChange}
                                value={this.state.Degree}>
                                <option></option>
                                <option>Bsc</option>
                                <option>BCA</option>
                                <option>BE</option>
                                <option>MCA</option>
                                <option>MBA</option> 
                                /</Form.Control>

                    </Form.Group>

                    <Form.Group controlId="formBasicLastName" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>College Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter College name"  name="College"
                            value={this.state.College}
                            onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicDateofbirth" className="col-12 col-md-7 mb-3 offset-md-2">
                        <Form.Label>Year</Form.Label>
                        <Form.Control type="date"  name="Year"
                            value={this.state.Year}
                            onChange={this.handleChange}/>

                    </Form.Group>

                  
                    <div className="col-12 col-md-7 mb-3 offset-md-2">
                        <Button variant="primary" type="submit"  >
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
        AddUser: (add_Data) => dispatch(thirdsubmit(add_Data)),
      
    }
}

export default connect(mapStateToProps ,  mapDispatchToProps) (ThirdPage);