import React, { Component } from "react";

export class PostList extends Component {
  state = {};

  // componentDidMount() {
  //   this.props.fetchPostList();
  // }

  render() {
    // const { listData } = this.props;
    return <div>Post List</div>;
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
