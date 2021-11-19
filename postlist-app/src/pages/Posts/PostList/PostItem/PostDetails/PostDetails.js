import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postFetchByIdThunk } from "../../../thunks/thunks";
import { Spin, Button } from "antd";
import { StyledPostDetails, StyledRow } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faInfo } from "@fortawesome/free-solid-svg-icons";

class PostDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.postFetchById(id);
  }

  render() {
    const { post, loading } = this.props;
    console.log(this.props);

    const date = new Date(post.createDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return (
      <div>
        <Spin size="large" spinning={loading}>
          <StyledPostDetails>
            <StyledRow>
              <span>{post.name}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faClock} />
              <span>{date}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faInfo} />
              <span> {post.description}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faUser} />
              <span>{post.author}</span>
            </StyledRow>
            <Link to="/posts">
              <Button color="secondary">Back</Button>
            </Link>
          </StyledPostDetails>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postDetailsReducer.post,
    loading: state.postDetailsReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postFetchById: (id) => dispatch(postFetchByIdThunk(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
