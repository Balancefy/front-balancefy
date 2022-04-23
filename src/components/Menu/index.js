import PageIcon from '../PageIcon'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import AvatarBalancefy from '../Avatar';
import { AuthContext } from '../../contexts/auth';
import React from 'react';

export default function Menu(props) {

    const { signOut } = React.useContext(AuthContext);
    return (
        <>
            <div style={{
                height: "100vh",
                width: "135px",
                minWidth: "135px",
                maxWidth: "135px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "40px 0 40px 0",
                backgroundColor: "#131515"
            }} >
                <Link to="/profile">
                    <AvatarBalancefy width="65px" style={{ border: "1px solid #000", marginBottom: "137px", cursor: "pointer" }}></AvatarBalancefy>
                </Link>
                {props.page === "Home" ?
                    <PageIcon selected icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/" style={{ color:"white" }}>
                        <PageIcon icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    </Link>
                }
                {props.page === "Forum" ?
                    <PageIcon selected icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/forum" style={{ color:"white" }}>
                        <PageIcon icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    </Link>
                }
                 {props.page === "Goals" ?
                    <PageIcon selected icon={<TrackChangesIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <Link to="/" style={{ color:"white" }}>
                        <PageIcon icon={<TrackChangesIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    </Link>
                }
                <PageIcon outlined icon={<AddIcon sx={{ color: "#7DE2D1", fontSize: "30px" }} />}></PageIcon>
                <div style={{
                    marginTop: "auto"
                }}>
                    <PageIcon onClick={signOut} icon={<LogoutIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    <img style={{height: "50px"}} src="./img/icon-white.svg"/>
                </div>
            </div>
        </>
    )
}