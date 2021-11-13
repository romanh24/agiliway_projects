import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsThunk } from "../thunks/thunks";
import { Empty } from "antd";
import PostItem from "./PostItem";
import { StyledPostList } from "./styled";
import PostAddModal from "../PostAddModal";

class PostList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPostList();
  }

  render() {
    const { listData } = this.props;
    console.log(listData);
    return (
      <div>
        <h1>Posts</h1>
        <PostAddModal />
        <StyledPostList>
          {!listData.loading &&
            listData.posts.map((post) => {
              return (
                <PostItem
                  key={post.uuid}
                  uuid={post.uuid}
                  createDate={post.createDate}
                  name={post.name}
                  author={post.author}
                  description={post.description}
                />
              );
            })}
        </StyledPostList>
        {!listData.posts.length && <Empty />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listData: state.postsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostList: () => dispatch(getPostsThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
