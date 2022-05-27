import { useState } from 'react';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ModalTopico from '../ModalTopico';
import ModalObjetivo from '../ModalObjetivo';
import ModalMovimentacao from '../ModalMovimentacao';

export default function SpeedAdd(props) {
    const [goalModalState, setGoalModalState] = useState(false);
    const [topicModalState, setTopicModalState] = useState(false);
    const [amountModalState, setAmountModalState] = useState(false);

    const actions = [
        { icon: <FileDownloadIcon onClick={() => setTopicModalState(true)}/>, name: 'Download Movimentações' },
        { icon: <AttachMoneyOutlinedIcon onClick={() => setAmountModalState(true)} />, name: 'Nova Movimentação' },
        { icon: <FlagOutlinedIcon onClick={() => setGoalModalState(true)}/>, name: 'Novo Objetivo' },
        { icon: <ForumIcon onClick={() => setTopicModalState(true)}/>, name: 'Novo Tópico' },
        { icon: <FileUploadIcon onClick={() => setTopicModalState(true)}/>, name: 'Upload Movimentações' },
    ];

    return(
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                direction="down"
                sx={{mt: 4}}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>

            <ModalTopico 
                open={topicModalState}
                title="Novo Tópico"
                onClick={() => {
                    setTopicModalState(false);
                }}
            />   
            <ModalMovimentacao
                open={true}
                title="Nova Movimentação"
                onClick={() => {
                    setAmountModalState(false);
                }}
            />
            <ModalObjetivo
                open={goalModalState}
                title="Novo Objetivo"
                onClick={() => {
                    setGoalModalState(false);
                }}
            />
        </>
         
    )
}