import React, { Component } from 'react';
import {
  Col, Container, Row, ListGroup, ListGroupItem, Button, Modal
} from 'react-bootstrap'


class Cats extends Component {
    constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleEdit = this.handleEdit.bind(this);


    this.state = {
      show: false,
      cats: " ",
      editable: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(cat) {
      console.log(cat);
    this.setState({ show: true, cats: cat});
  }

  handleEdit(cat){
   if(this.state.editable){
      let name = this.name
      let age = this.age
      let enjoys = this.enjoys

      let id = this.props.cat.id
      let cat = {id: id, name: name, age: age, enjoys:enjoys}
      this.props.handleUpdate(cat)
    }
    this.setState({
      editable: this.state.editable
    })
  }


render() {
    let {handleDeleteCat, handleUpdateCat, name, age, enjoys, cat} = this.props
      return (
         <div>
             {name}
             {age}
             {enjoys}
        <Container>
            <Row>
            <Col xs={12}>
              <ListGroup>
              {this.props.cats.map((cat, index) => {
                return (
                  <ListGroupItem key={index}>
                    <h4>
                        <span className='cat-name'>
                        </span>
                        <small className='cat-age'> {cat.name}</small>
                        </h4>
                <span className='cat-enjoys'></span>

                        <button onClick={this.handleShow.bind(this, cat)}>More Info</button>

                        <button id="submit" onClick={()=> handleDeleteCat(cat)} type="button">Delete</button>


                  </ListGroupItem>
                )
            })}


            </ListGroup>
            </Col>
            </Row>

        <Modal show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                <Modal.Title>{this.state.cats.name}</Modal.Title>
                </Modal.Header>

              <Modal.Body>
              {this.state.cats.name}
             let name = this.state.editable? <input type='text' ref={input => this.props.cats.name = input} defaultValue={this.props.cats.name}/>

             <br/> {this.state.cats.age}
              let age = this.state.editable? <input type='text' ref={input => this.props.cats.age = input} defaultValue={this.props.cats.age}/>

               <br/> {this.state.cats.enjoys}
             let enjoys = this.state.editable? <input type='text' ref={input => this.props.cats.enjoys = input} defaultValue={this.props.cats.enjoys}/>
               </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
                <Button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</Button>
                 <button id="submit" onClick={()=> handleUpdateCat(cat)} type="button">Update</button>
              </Modal.Footer>

            </Modal>

  	    </Container>
        </div>

      );
    }
    }


export default Cats;
