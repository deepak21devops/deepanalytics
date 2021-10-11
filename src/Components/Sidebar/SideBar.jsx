import React from 'react'
import './sidebar.css'
import { HomeOutlined } from '@material-ui/icons'
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="left">
                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">DashBoard</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Home</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Create Task</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Edit Task</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Quick Menu</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>My Tasks</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Completed Tasks</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Pending Tasks</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menuContainer">
                    <div className="menu">
                        <h3 className="menuTitle">Reports Menu</h3>
                        <ul className="menulist">
                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>All Tasks Reports</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Completed Tasks Report</span>
                            </li>

                            <li className="menuItems">
                                <HomeOutlined className="icons" />
                                <span>Pending Tasks Report</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="right">
                Right
            </div>
        </div>
    )
}