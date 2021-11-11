import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { StyledPostItem } from "./styled";

class PostItem extends Component {
  render() {
    const { uuid, createDate, name, author, description } = this.props;
    const date = new Date(createDate).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return (
      <div>
        <StyledPostItem>
          <h3>{name}</h3>
          <p>{date}</p>
          <p>{description.substring(0, 400)}...</p>
          <Link to={`/books/${uuid}`}>
            <Button color="primary">Read More</Button>
          </Link>
        </StyledPostItem>
      </div>
    );
  }
}

export default PostItem;
