import React from 'react';
import FaIcon from '../components/faIcon/faIcon'

//faExclamationTriangle
function HomePage() {

    return (
        <div className="general-container">
            <div className="pageNotFound">
                <FaIcon iconName='faExclamationTriangle' iconSize='3x' iconColor='yellow'/>
                <div className="mt-2">Page Not Found</div>
                </div>
        </div>
    )
}

export default HomePage;