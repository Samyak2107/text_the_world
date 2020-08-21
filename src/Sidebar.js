import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat.js';
import db from './firebase.js';
import { useStateValue } from './StateProvider.js';
import './Sidebar.css';

function Sidebar() {
	const [rooms, setRooms] = useState([]);
	const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => 
           setRooms(snapshot.docs.map(doc => ({
             id: doc.id,
             data: doc.data(),
           }
           	)))
        	);

   return () => {
   	unsubscribe();
   };
}, []);

	return (
       <div className="sidebar">

          <div className="sidebar__header">
             <Avatar alt ='' src={user?.photoURL} />
                <div className="sidebar__headerRight">
                   <IconButton>
                    <DonutLargeRoundedIcon />
                   </IconButton>
                   <IconButton> 
                    <ChatRoundedIcon />
                   </IconButton>
                   <IconButton> 
                    <MoreVertRoundedIcon />
                   </IconButton> 
                </div>
          </div>

          <div className="sidebar__search">
                 <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start a new chat" type="text" />
                 </div>
          </div>

          <div className="sidebar__chats">
                    <SidebarChat addNewChat />
                    {rooms.map(room => (
                          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    	))}
          </div>

       </div>
		)
}

export default Sidebar;