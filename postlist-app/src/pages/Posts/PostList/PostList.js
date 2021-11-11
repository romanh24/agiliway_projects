import React, { Component } from "react";
import { connect } from "react-redux";
import { thunkPosts } from "../thunks";
import { Empty } from "antd";
import PostItem from "./PostItem/PostItem";
import { StyledPostList } from "./styled";
import { PostAddModel } from "../PostAddModel";

export class PostList extends Component {
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
        <PostAddModel />
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
        {!listData.posts && <Empty />}
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
    fetchPostList: () => dispatch(thunkPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
