import { useState } from 'react';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ForumIcon from '@mui/icons-material/Forum';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import ModalTopico from '../ModalTopico';
import ModalObjetivo from '../ModalObjetivo';
import ModalMovimentacao from '../ModalMovimentacao';

export default function SpeedAdd(props) {
    const [goalModalState, setGoalModalState] = useState(false);
    const [topicModalState, setTopicModalState] = useState(false);
    const [amountModalState, setAmountModalState] = useState(false);

    const actions = [
        { icon: <AttachMoneyOutlinedIcon onClick={() => setAmountModalState(true)} />, name: 'Movimentação' },
        { icon: <FlagOutlinedIcon onClick={() => setGoalModalState(true)}/>, name: 'Objetivo' },
        { icon: <ForumIcon onClick={() => setTopicModalState(true)}/>, name: 'Tópico' },
    ];

    return(
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ 
                    position: 'absolute',
                    bottom: 35,
                    left: '95%',
                }}
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
                open={amountModalState}
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