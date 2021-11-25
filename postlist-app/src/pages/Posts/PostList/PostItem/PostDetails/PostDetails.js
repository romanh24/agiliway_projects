import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faInfo } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import PropTypes from 'prop-types';
// import { postFetchThunk } from '../../../thunks/thunks';
import { postFetchStartAction } from '../../../actions/post.action';
import { StyledPostDetails, StyledRow } from './styled';
import { selectorPost, selecLoading } from '../../../selectors/post.selectors';

export class PostDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const { postFetch } = this.props;

    postFetch(id);
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
              <Button data-testid='back-button' color='secondary'>
                Back
              </Button>
            </Link>
          </StyledPostDetails>
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { postReducer } = state;
  return {
    post: selectorPost(postReducer),
    loading: selecLoading(postReducer),
  };
};

const mapDispatchToProps = {
  postFetch: postFetchStartAction,
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
  postFetch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
