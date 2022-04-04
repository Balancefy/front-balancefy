import Container from '../Container';

function ProfileBalancefy(props) {
    return (
    <>
        <Container width="80%" height="332px" borderRadius="15px 15px 0 0">
            <div style={{
                width: "100%",
                height: "100%",
                borderRadius: "15px 15px 0 0",
                backgroundImage: `url(${props.backgroundProfile})`
            }}>
                
            </div>
        </Container>    
    </>
    )
}

export default ProfileBalancefy;


// <ProfileBalancefy backgroundProfile="https://marcuspessoa.com.br/wp-content/uploads/2021/02/As-melhores-capas-para-o-Facebook-1.jpg"></ProfileBalancefy>
