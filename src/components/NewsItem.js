import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source } = this.props;
    return (
      <div className="my-4">
        <div className="card">
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%" , zIndex:'1'}}>
                {source}
              </span>
          <img
            src={
              !imageUrl
                ? "data:image/jpeg;base64,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"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
