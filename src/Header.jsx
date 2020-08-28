import React from "react";
import "./Header.css";
import {
    Search as SearchIcon,
    Home as HomeIcon,
    Flag,
    SubscriptionsOutlined,
    StorefrontOutlined,
    SupervisedUserCircle,
    Add,
    Forum,
    NotificationsActive,
    ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <Flag fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircle fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Farhan</h4>
                </div>
                <IconButton>
                    <Add />
                </IconButton>
                <IconButton>
                    <Forum />
                </IconButton>
                <IconButton>
                    <NotificationsActive />
                </IconButton>
                <IconButton>
                    <ExpandMore />
                </IconButton>
            </div>
        </div>
    );
}

export default Header;
