import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import ButtonBalancefy from "../Button";
import { style } from "./style";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { uploadImage } from "../../service/utils";

export default function ModalProfile(props) {

    const modalState = props.open
    const [image, setImage] = useState(props.src);
    const [fileImage, setFileImage] = useState(null);
    const [editDisplay, setEditDisplay] = useState(false);

    const inputRef = React.useRef(null);


    const eventStyle = editDisplay ? {
        cursor: "pointer",
        opacity: "0.3",
        PointerEvent: "initial"
    } : {}

    const changeImage = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const file = e.target.files[0]; 
        let imageUrl = URL.createObjectURL(file);
        setFileImage(file);
        setImage(imageUrl);
    }

    const uploadFile = () => {
        if (fileImage == null) {
            setImage(props.src)
            props.closeAction()
            return;
        }
        uploadImage(fileImage);
    }

    return (
        <>
            <Modal open={modalState}>
                <Box sx={style}>
                    <div style={{
                        marginLeft: "10px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#7de2d1",
                        marginBottom: "20px"
                    }}>
                        Escolha uma foto de perfil:

                    </div>

                    <div o style={{
                        marginTop: "20px",
                        width: "250px",
                        backgroundColor: "#000",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        background: `no-repeat center/100% url(${image}) `,

                    }}>
                        <div onMouseEnter={() => setEditDisplay(true)} onMouseLeave={() => setEditDisplay(false)} style={{
                            width: "250px",
                            height: "250px",
                            border: "2px dashed #fff",
                            borderRadius: "50%",
                            position: "relative",
                        }}>
                            <ButtonBalancefy onClick={() => inputRef.current.click()} style={{
                                transition: "all ease-in-out 0.1s",
                                width: "100%",
                                height: "100%",
                                opacity: "0.0",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                cursor: "initial",
                                PointerEvent: "none",
                                display: "center",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "120px",
                                ...eventStyle
                            }} color="secondary">
                                <CameraAltIcon fontSize="inherit" />
                                <input type='file' name="image" accept='image/*' id='file' ref={inputRef} onChange={(e) => changeImage(e)} style={{ display: 'none' }} />

                            </ButtonBalancefy>
                        </div>
                    </div>

                    <div style={{
                        margin: "0 auto",
                        width: "90%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "20px"
                    }}>
                        <div style={{
                            color: "#7de2d1"
                        }}>Sua foto ficará assim!</div>
                        <div style={{
                            marginTop: "30px",
                            display: "flex",
                            width: "80%",
                            justifyContent: "space-between"
                        }}>
                            <ButtonBalancefy onClick={() => {
                                setImage(props.src);
                                setFileImage(null);
                                props.closeAction()
                            }} color={"secondary"}>Cancelar</ButtonBalancefy>
                            <ButtonBalancefy onClick={() => uploadFile()}>Confirmar</ButtonBalancefy>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    )
}



