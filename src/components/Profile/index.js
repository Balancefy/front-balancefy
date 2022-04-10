import Container from '../Container';
import Avatar from '../Avatar'
import TitleBalancefy from '../Title';
import ButtonBalancefy from '../Button';

function ProfileBalancefy(props) {
    return (
        <>
            <Container width="70%" height="270px" borderRadius="15px 15px 0 0">
                <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px 15px 0 0",
                    backgroundImage: `url(${props.backgroundProfile})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>

                    <div style={{
                        marginLeft: "80px",
                        paddingTop: "200px",
                        width: "10%",
                        float: "left",

                    }}>
                        <Avatar imageAvatar="data:image/jpeg;base64,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" width="150px" />
                    </div>

                    <div style={{
                        textAlign: "center",
                        width: "15%",
                        float: "left",
                        marginTop: "285px" 
                    }}>
                        <TitleBalancefy variant="h3">Matias</TitleBalancefy>
                        <TitleBalancefy variant="h3" color="#7DE2D1">Perfil de pobre</TitleBalancefy>
                    </div>

                    <div style={{
                         width: "60%",
                         textAlign: "right",
                         float: "right",
                         marginTop: "288px",
                         display: 'in'
                    }}>
                        <ButtonBalancefy width="150px" height="40px" color="primary" radius="7px">
                            Editar
                        </ButtonBalancefy>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProfileBalancefy;


// <ProfileBalancefy backgroundProfile="https://marcuspessoa.com.br/wp-content/uploads/2021/02/As-melhores-capas-para-o-Facebook-1.jpg"></ProfileBalancefy>
