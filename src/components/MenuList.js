import '../styles/menu.css'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

import DashboardIcon from '@mui/icons-material/Dashboard';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import LayersIcon from '@mui/icons-material/Layers';

// const list = [{name:'Dashboard',Link:'/dashboard'},{name:'Calendar',Link:'/'},{name:'Profile',Link:'/dashboard/profile'},{name:'Comments',Link:'/dashboard/comments'}, 
//                {name: 'Videos', Link:'/dashboard/videos'},{name: 'Tenants', Link:'/dashboard/tenants'},{name: 'Users', Link:'/dashboard/users'}];
// function MenuList(){
    
//     return
//         <div className="menu">
//             <h3 id='menuHeading'>Menu</h3>
//             <ul>
//                 {list.map((e,i)=>{
//                     return (
//                         <li key={i} id='menuList'onClick={()=>handleClick(e.Link)}><MenuLinks obj = {e}/></li>
//                     );
//                 })}
//             </ul>
//         </div>
    
// }
export const menuList = (
    <React.Fragment>
      <ListItemButton href='/dashboard'>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      {/* <ListItemButton href='/dashboard/profile'>
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton> */}
      <ListItemButton href='/dashboard/comments'>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Comments" />
      </ListItemButton>
      <ListItemButton href='/dashboard/videos'>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Videos" />
      </ListItemButton>
      <ListItemButton href='/dashboard/users'>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton href='/dashboard/tenants'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Tenants" />
      </ListItemButton>
    </React.Fragment>
  );