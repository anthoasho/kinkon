import React from 'react';
import {Link} from "react-router-dom";
import FollowButton from "../common/FollowButton";
import ProfileImg from "../common/ProfileImg";
import {popUpHide} from "../store/actions/UI";
import {connect } from "react-redux";

//Individual element within the list of followers, this is used for both followers and following
const Follower = (props) => {
  return(
    <div className="follow-list-box item-box">
      <ProfileImg
        username={props.username}
        profileImg= {props.profileImgUrl}
        profileColor={props.profileColor}
      />
      <Link to={`/${props.username}`} onClick={props.popUpHide}>
      {props.username}
      </Link>
      <FollowButton username={props.username} current={props.currentUser.current} followType={[props.username, "followList", props.itemNum]} extraClass={"follow-btn-small"}following={props.following} itemNum={props.itemNum} />
    </div>
  )
}
export default connect(null, {popUpHide})(Follower);
