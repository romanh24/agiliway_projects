import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postFetchByIdThunk } from "../../../thunks/thunks";
import { Spin, Button } from "antd";
import { StyledPostDetails, StyledRow } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faComment,
  faUser,
  faClock,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";

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
          <StyledRow>
            <span>{postData.post.name}</span>
          </StyledRow>
          <StyledRow>
            <FontAwesomeIcon icon={faClock} />
            <span>{date}</span>
          </StyledRow>
          <StyledRow>
            <FontAwesomeIcon icon={faInfo} />
            <span> {postData.post.description}</span>
          </StyledRow>
          <StyledRow>
            <FontAwesomeIcon icon={faUser} />
            <span>
              <b>Author:</b> {postData.post.author}
            </span>
          </StyledRow>
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
