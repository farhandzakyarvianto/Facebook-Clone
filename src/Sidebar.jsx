import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined,
} from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
                src="https://lh3.googleusercontent.com/ogw/ADGmqu-idthPYyk245n6CN-l0vjes1b2cwVbBTdvfy8H=s32-c-mo"
                title="Farhan"
            />
            <SidebarRow
                Icon={LocalHospital}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    );
}

export default Sidebar;
