import React from 'react'
import AddSite from './addSite'
import Link from 'next/link'
import Styles from "./Admin.module.css";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

function admin() {
  return (
    <div className={Styles.container}>
        <div className={Styles.dashboard}>

            <div><span className={Styles.dash}>Dashboard <DashboardCustomizeIcon fontSize="large" /> </span></div>
            <div>
                <span className={Styles.hello}>Welcome Admin !!</span>
            </div>
        </div>
        <div className={Styles.admiboxcontainer}>
    <div><span className={Styles.dashx}>Admin Settings <ManageHistoryIcon fontSize="large" /> </span></div>

    <div className={Styles.admin}>
        <div className={`${Styles.adminBox} ${Styles.adminbox1}`}>
            <div><Link href="/addsite"> <span>Add Site</span></Link></div>
            <div className={Styles.adminIcons1}><AddLocationAltOutlinedIcon /></div>
        </div>
        <div className={`${Styles.adminBox} ${Styles.adminbox2}`}>
           <div> <Link href="/addsite"> <span>Edit Sites</span></Link></div>
            <div className={Styles.adminIcons2}> <EditOutlinedIcon /> </div>
        </div>
        <div className={`${Styles.adminBox} ${Styles.adminbox3}`}>
        <div> <Link href="/addsite"> <span>Account Settings</span></Link></div>
            <div className={Styles.adminIcons3}> <ManageAccountsOutlinedIcon/> </div>
        </div>
    </div>
    </div>
    </div>

  )
}

export default admin