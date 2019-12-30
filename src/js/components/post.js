import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Router, Route, Redirect } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getData } from "../actions/index";
export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log("Datas are:", this.props.lists);

    return (
      <>
        <Table striped bordered hover>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
          {this.props.lists.map(e => (
            <tr>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
              <td>
                <Link
                    to={{
                      pathname: `details/${e.id}`
                    }}
                  >Details</Link>
             
              </td>
            </tr>
          ))}
        </Table>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    lists: state.listData
  };
}
export default connect(mapStateToProps, { getData })(Post);
