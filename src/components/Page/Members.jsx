import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';
import Profilecard from './Profilecard';

const Members = () => {
    
    const members = useLoaderData()
    return (
        <div>
          {
            members.map(user=><Profilecard key={user._id} user={user}></Profilecard>)
            
         }
        
        </div>
    );
};

export default Members;