import React, { Component } from "react";
import { connect } from "react-redux";
import { getDataDetail } from "../actions/index";

import { Table, Button } from "reactstrap";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getDataDetail();
  }
  render() {
    const {
      match: { params }
    } = this.props;
    const { id } = params;
    console.log("Job Id:", id);
    return (
      <div>
        <Table>
          <tr>
            <th>Job Id</th>
          </tr>
          <tr>
            <td>{id}</td>
            {console.log("akhill:", this.props.postId)}
          </tr>
        </Table>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postId: postId => dispatch({ type: "LOADED_DATA_DETAIL", ID: { postId } })
  };
};
export default connect(mapDispatchToProps, { getDataDetail })(Details);
