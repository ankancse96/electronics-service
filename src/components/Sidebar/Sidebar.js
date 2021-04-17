import React, { useContext ,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../.././App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser)
    console.log(loggedInUser.email)
    const [isEngineer, setIsEngineer] = useState(false);

    useEffect(() => {
        fetch('https://still-eyrie-99544.herokuapp.com/isEngineer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsEngineer(data));
    }, [loggedInUser.email])
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-4 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                {isEngineer && <div>
                <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/manageProduct" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Manage Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/totalOrder" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/engineer" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Engineer</span>
                    </Link>
                </li>
                </div>}
                <li>
                    <Link to="/rating" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Add Review</span>
                    </Link>
                </li>
                
                
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;