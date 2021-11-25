import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisV,
  faComment,
  faClock,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { StyledPostItem, StyledDropDown, StyledRow } from './styled';
import {
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from '../../action-types/modal.action-types';

class PostItem extends Component {
  render() {
    const {
      id,
      post,
      createDate,
      name,
      description,
      author,
      postEditFetchById,
      openModal,
    } = this.props;

    const menu = (
      <Menu key='postItem'>
        <Menu.Item
          key='dropDownEdit'
          onClick={() => {
            openModal(MODAL_EDIT_TYPE);
            postEditFetchById(id);
          }}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          key='dropDownDelete'
          onClick={() => {
            openModal(MODAL_DELETE_TYPE, post);
          }}
        >
          Delete
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <StyledPostItem>
          <StyledDropDown>
            <FontAwesomeIcon icon={faComment} size='2x' />
            <Dropdown
              placement='bottomRight'
              overlay={menu}
              trigger={['click']}
            >
              <a href='/#' onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faEllipsisV} size='lg' color='black' />
              </a>
            </Dropdown>
          </StyledDropDown>
          <StyledRow>
            <span>{name}</span>
          </StyledRow>

          <StyledRow>
            <FontAwesomeIcon icon={faClock} />
            <span>{moment(createDate).format('LL')}</span>
          </StyledRow>
          <StyledRow>
            <FontAwesomeIcon icon={faInfo} />
            <span>
              {description.substring(0, 400)}
              ...
            </span>
          </StyledRow>

          <StyledRow>
            <FontAwesomeIcon icon={faUser} />
            <span>{author}</span>
          </StyledRow>

          <Link to={`/posts/${id}`}>
            <Button color='primary'>Read More</Button>
          </Link>
        </StyledPostItem>
      </div>
    );
  }
}

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  post: PropTypes.shape({
    uuid: PropTypes.string,
    name: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    createDate: PropTypes.string,
  }).isRequired,
  createDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postEditFetchById: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default PostItem;
