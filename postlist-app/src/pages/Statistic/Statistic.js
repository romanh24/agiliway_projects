import React, { Component } from "react";
import { Empty } from "antd";
import { Table } from "antd";
import { connect } from "react-redux";
import { postsFetchThunk } from "../../pages/Posts/thunks/thunks";
import { createSelector } from "reselect";

class Statistic extends Component {
  componentDidMount() {
    const { postsFetch } = this.props;

    postsFetch();
  }

  render() {
    const { listData, loading } = this.props;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Author",
        key: "author",
        dataIndex: "author",
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
      },
      {
        title: "Date of create",
        key: "createDate",
        dataIndex: "createDate",
      },
    ];

    return (
      <div>
        <h1>Statistic</h1>
        <Table loading={loading} columns={columns} dataSource={listData} />
        {!listData && <Empty />}
      </div>
    );
  }
}

const selectList = (postsReducer) => postsReducer.posts;
const selectLoading = (postsReducer) => postsReducer.loading;
const selectorListData = createSelector(selectList, (posts) => posts);
const selectorLoading = createSelector(selectLoading, (loading) => loading);

const mapStateToProps = (state) => {
  const { postsReducer } = state;
  return {
    listData: selectorListData(postsReducer),
    loading: selectorLoading(postsReducer),
  };
};

const mapDispatchToProps = {
  postsFetch: postsFetchThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
