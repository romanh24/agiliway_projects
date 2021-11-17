import React, { Component } from "react";
import { Empty } from "antd";
import { Table } from "antd";
import { connect } from "react-redux";
import { getPostsThunk } from "../../pages/Posts/thunks/thunks";

class Statistic extends Component {
  componentDidMount() {
    const { getPosts } = this.props;

    getPosts();
  }

  render() {
    const { postList } = this.props;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: {
          compare: (a, b) => a.name - b.name,
          multiple: 1,
        },
      },
      {
        title: "Author",
        key: "author",
        dataIndex: "author",
        sorter: {
          compare: (a, b) => a.author - b.author,
          multiple: 2,
        },
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        sorter: {
          compare: (a, b) => a.descruption - b.description,
          multiple: 3,
        },
      },
      {
        title: "Date of create",
        key: "createDate",
        dataIndex: "createDate",
        sorter: {
          compare: (a, b) => a.createDate - b.createDate,
          multiple: 4,
        },
      },
    ];

    return (
      <div>
        <h1>Statistic</h1>
        <Table columns={columns} dataSource={postList} />
        {!postList && <Empty />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postList: state.postsReducer.posts,
});

const mapDispatchToProps = {
  getPosts: getPostsThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
