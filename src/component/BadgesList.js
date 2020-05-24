import React from "react";
import "../styles/Badges.css";
import logotwitter from "../img/twitter.png";

class BadgeList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled ">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="Badgelist">
              <div className="row">
                <div className="col-4">
                  <img src={badge.avatarUrl} className="avatalist" alt='Avatar'/>
                </div>
                <div className="col-8">
                  <h5>
                    {badge.firstName} {badge.lastName}
                  </h5>
                  <p>{badge.jobTitle}</p>
                  <p className="styletwitter">
                    <img src={logotwitter} className="logotwitter" alt='Twiter' />@
                    {badge.twitter}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgeList;
