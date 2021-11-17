import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { StyledPostItem, StyledDropDown, StyledRows } from "./styled";

import { Menu, Dropdown } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faComment,
  faUser,
  faClock,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import {
  MODAL_EDIT_TYPE,
  MODAL_DELETE_TYPE,
} from "../../action-types/modal.action-types";

class PostItem extends Component {
  render() {
    const {
      id,
      createDate,
      name,
      author,
      description,
      postEditGetById,
      postDeleteGetById,
      openModal,
    } = this.props;

    const menu = (
      <Menu>
        <Menu.Item
          key="0"
          onClick={() => {
            openModal(MODAL_EDIT_TYPE);
            postEditGetById(id);
          }}
        >
          Edit
        </Menu.Item>
        <Menu.Item
          key="1"
          onClick={() => {
            openModal(MODAL_DELETE_TYPE);
            postDeleteGetById(id);
          }}
        >
          Delete
        </Menu.Item>
      </Menu>
    );

    const date = new Date(createDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return (
      <div>
        <StyledPostItem>
          <StyledDropDown>
            <FontAwesomeIcon icon={faComment} size="2x" />
            <Dropdown
              placement="bottomRight"
              overlay={menu}
              trigger={["click"]}
            >
              <a href="/#" onClick={(e) => e.preventDefault()}>
                <FontAwesomeIcon icon={faEllipsisV} size="lg" color="black" />
              </a>
            </Dropdown>
          </StyledDropDown>
          <StyledRows>
            <FontAwesomeIcon icon={faUser} />
            <span>{name}</span>
          </StyledRows>

          <StyledRows>
            <FontAwesomeIcon icon={faClock} />
            <span>{date}</span>
          </StyledRows>
          <StyledRows>
            <FontAwesomeIcon icon={faInfo} />
            <span>{description.substring(0, 400)}...</span>
          </StyledRows>

          <Link to={`/posts/${id}`}>
            <Button color="primary">Read More</Button>
          </Link>
        </StyledPostItem>
      </div>
    );
  }
}

export default PostItem;
