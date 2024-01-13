import React, { useState } from "react";
import "./style.css";
import Tab from "../Tab";
import Brand from "../../../assets/react.svg";
import {
    GoSearch,
    GoHome,
    GoPerson,
    GoListUnordered,
    GoNote,
    GoBell,
    GoSignOut,
} from "react-icons/go";
const NavBarBody = () => {
    const [active, setActive] = useState(2);

    return (
        <div className="navbar">
            <div className="top">
                <div className="brand-icon">
                    <img src={Brand} />
                </div>
                <Tab key={1}>
                    <GoSearch />
                </Tab>
            </div>
            <div className="tabList">
                <Tab key={2} onClick={() => setActive(2)} active={active == 2}>
                    <GoHome />
                </Tab>
                <Tab key={3} onClick={() => setActive(3)} active={active == 3}>
                    <GoNote />
                </Tab>
                <Tab key={4} onClick={() => setActive(4)} active={active == 4}>
                    <GoListUnordered />
                </Tab>
                <Tab key={5} onClick={() => setActive(5)} active={active == 5}>
                    <GoPerson />
                </Tab>
            </div>
            <div className="bottom">
                <Tab key={6} onClick={() => setActive(6)} active={active == 6}>
                    <GoBell />
                </Tab>
                <Tab key={7}>
                    <GoSignOut />
                </Tab>
            </div>
        </div>
    );
};

export default NavBarBody;
