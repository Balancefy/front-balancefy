import React from 'react';
import Container from '../Container';
import TitleBalancefy from '../Title';

const Progress = (props) => {

    return (
        <>
            <Container height="192px" backgroundColor="#4B4B4B">
                <div style={{ padding: "27px 0px 0px 40px" }}>
                    <TitleBalancefy variant="h2">Progresso</TitleBalancefy>
                </div>
                <div style={{
                    width: "100%",
                    padding: "0 40px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        height: "30px",
                        width: "100%",
                        zIndex: 1,
                        borderRadius: "20px",
                        background: "#131515",
                        overflow: "hidden",
                        position: "relative"
                    }}>
                        <div style={{
                            width: `${(props.pontuacao * 100) / props.totalValue}%`,
                            height: "100%",
                            background: "#7de2d1",
                            top: 0,
                            left: 0,
                            position: "absolute"
                        }}></div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        {((props.pontuacao * 100) / props.totalValue).toFixed(2)}%
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        {Math.ceil(props.pontuacao).toFixed(0)}/{props.totalValue} XP
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Progress;