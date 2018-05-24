import React from 'react';
import {Link} from "react-router-dom";
import FollowButton from "./FollowButton";
import ProfileImg from "./ProfileImg";
import {popUpHide} from "../store/actions/UI";
import {connect } from "react-redux";

//Individual element within the list of followers, this is used for both followers and following
const SingleListItem = (props) => {
  return(
    <div className={`${props.className} list-enter`}>
      <ProfileImg
        username={props.username}
        profileImg= {props.profileImgUrl}
        profileColor={props.profileColor}
      />
      <Link to={`/${props.username}`} onClick={props.popUpHide}>
      {props.username}
      </Link>
      <FollowButton
        username={props.username}
        current={props.currentUser.current}
        followType={[props.username, props.followType, props.itemNum]} //This sends in the Username, location of store of the list and also location of the button of the list
        extraClass={"follow-btn-small"}                                //Allows for self updating follow buttons on lists
        following={props.following}                                    //[0] UserName of Person to follow
        itemNum={props.itemNum}                                        //[1] Specifies list location (for the REDUX store )
                                                                       //[2] Specifies index of ListItem to update
      />
    </div>
  )
}
export default connect(null, {popUpHide})(SingleListItem);
