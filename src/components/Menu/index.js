import Avatar from '../Avatar'
import PageIcon from '../PageIcon'
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';


export function Exemplo(props) {

}

export default function Menu(props) {
    return (
        <>
            <div style={{
                height: "100vh",
                width: "135px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "40px 0 40px 0",
                backgroundColor: "#131515"
            }} >
                <Avatar
                    width="65px"
                    onClick={() => console.log("vaquinha aqui")}
                    style={{ border: "1px solid #000", marginBottom: "137px", cursor: "pointer" }}>
                    WP
                </Avatar>
                {props.page === "Home" ?
                    <PageIcon selected icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <PageIcon icon={<HomeIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                }
                {props.page === "Forum" ?
                    <PageIcon selected icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <PageIcon icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                }
                 {props.page === "Goals" ?
                    <PageIcon selected icon={<TrackChangesIcon sx={{ fontSize: "45px" }} />}></PageIcon> :
                    <PageIcon icon={<TrackChangesIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                }
                <PageIcon outlined icon={<AddIcon sx={{ color: "#7DE2D1", fontSize: "30px" }} />}></PageIcon>
                <div style={{
                    marginTop: "auto"
                }}>
                    {/* Adicionar as imagens! (logo e logout) */}
                    <PageIcon icon={<LogoutIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                    <PageIcon icon={<ForumIcon sx={{ fontSize: "45px" }} />}></PageIcon>
                </div>
            </div>
        </>
    )
}