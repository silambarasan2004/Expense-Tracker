import React from 'react'
import { useContext } from 'react'
import { Children } from 'react'
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';
const DashboardLayout = ({children,activeMenu}) => {
    const {user} = useContext(UserContext);
    console.log("user in DashboardLayout:", user);
  return (
    <div className="">
        <Navbar activeMenu={activeMenu}/>
        {user && (
            <div className="flex">
                <div className="max-[1080px]:hidden">
                <div>
                    <SideMenu activeMenu={activeMenu} />
                </div>
                </div>
                <div className="grow mx-5">{children}</div>
                </div>
        )}
    </div>
  )
}

export default DashboardLayout;
