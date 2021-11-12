import React from 'react'
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

const DashboardHome = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
            <div><h1><AccessibleForwardIcon sx={{fontSize:"60px", color:"#f16232"}}/> Welcome!</h1></div>
        </div>
    )
}

export default DashboardHome
