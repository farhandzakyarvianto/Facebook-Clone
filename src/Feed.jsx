import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-idthPYyk245n6CN-l0vjes1b2cwVbBTdvfy8H=s32-c-mo"
                message="HOOOLLLLAAAA"
                timestamp=""
                username="Frhan"
                image="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB18rS3f.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f&x=842&y=133"
            />
            <Post
                profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu-idthPYyk245n6CN-l0vjes1b2cwVbBTdvfy8H=s32-c-mo"
                message="HOOOLLLLAAAA"
                timestamp=""
                username="Frhan"
            />
            
        </div>
    );
}

export default Feed;
