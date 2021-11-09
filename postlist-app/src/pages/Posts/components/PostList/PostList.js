import React, { Component } from "react";
import { Empty } from "antd";

export class PostList extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.fetchPostList();
  // }

  render() {
    // const { listData } = this.props;
    return (
      <div>
        <h1>Post List</h1>
        <Empty />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     listData: state.listReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPostList: () => dispatch(fetchPostListAction()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PostList);

export default PostList;
