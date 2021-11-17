import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postFetchByIdThunk } from "../../../thunks/thunks";
import { Spin, Button } from "antd";
import { StyledPostDetails } from "./styled";

class PostDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.postFetchById(id);
  }

  render() {
    const { postData } = this.props;

    const date = new Date(postData.post.createDate).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
    return (
      <div>
        <StyledPostDetails>
          <h3>{postData.post.name}</h3>
          <p>{date}</p>
          <p>
            <b>Description:</b> {postData.post.description}
          </p>
          <p>
            <b>Author:</b> {postData.post.author}
          </p>
          <div>{postData.loading && <Spin size="medium" />}</div>
          <Link to="/posts">
            <Button color="secondary">Back</Button>
          </Link>
        </StyledPostDetails>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postData: state.postDetailsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postFetchById: (id) => dispatch(postFetchByIdThunk(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
