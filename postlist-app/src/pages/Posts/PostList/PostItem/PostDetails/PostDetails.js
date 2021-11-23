import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faInfo } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { postFetchByIdThunk } from '../../../thunks/thunks';
import { StyledPostDetails, StyledRow } from './styled';
import {
  selectorPost,
  selecLoading,
} from '../../../selectors/postDetails.selectors';

class PostDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const { postFetchById } = this.props;

    postFetchById(id);
  }

  render() {
    const { post, loading } = this.props;

    return (
      <div>
        <Spin size='large' spinning={loading}>
          <StyledPostDetails>
            <StyledRow>
              <span>{post.name}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faClock} />
              <span>{moment(post.createDate).format('LL')}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faInfo} />
              <span> {post.description}</span>
            </StyledRow>
            <StyledRow>
              <FontAwesomeIcon icon={faUser} />
              <span>{post.author}</span>
            </StyledRow>
            <Link to='/posts'>
              <Button color='secondary'>Back</Button>
            </Link>
          </StyledPostDetails>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { postDetailsReducer } = state;
  return {
    post: selectorPost(postDetailsReducer),
    loading: selecLoading(postDetailsReducer),
  };
};

const mapDispatchToProps = {
  postFetchById: postFetchByIdThunk,
};

PostDetails.propTypes = {
  post: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  postFetchById: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
