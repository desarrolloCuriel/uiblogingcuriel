import React from "react";
import logoPrincipal from "../img/badge-header.svg";
import "../styles/Badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="BadgeHeader">
          <img src={logoPrincipal} alt="Logo principal"></img>
        </div>
        <div className="BadgeName">
          <img src={this.props.avatar} alt="Avatar"></img>
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
        </div>
        <div className="BadgeSectionInfo">
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter}</p>
        </div>
        <div className="BadgeFooter">#famsa</div>
      </div>
    );
  }
}

export default Badge;
