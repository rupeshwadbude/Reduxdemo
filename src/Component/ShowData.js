import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button , Container, Table } from 'react-bootstrap';
import {Delete} from '../Redux/Action'

class ShowData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userdata:[]
        }
    }
    

    componentDidMount() {
        console.log("Showdata", this.props.data)
    }
    
    onDeleteHandler(id) {
        alert("Deleted")
        this.props.Deletedata(id);
    }
    render() {
        
        return (
            <div>
                <div className="main_div">
                    {this.props.data.length > 0 ?
                        <Container>
                            <Table striped bordered hover >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>College</th>
                                        <th>Degree</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.data.map(element => {
                                            return (<tr key={element.id}>
                                                <td>{element.firstname}</td>
                                                <td>{element.Address}</td>
                                                <td>{element.College}</td>
                                                <td>{element.Degree}</td>
                                                <td>{element.Year}</td>
                                                <td><Button onClick={() => this.onDeleteHandler(element.id)}>Delete</Button></td>
                                            </tr>)
                                        })
                                    }
                                   
                                  
                                </tbody>
                            </Table>
                        </Container>
                        : ""}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Deletedata: (id) => dispatch(Delete(id)),
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowData);