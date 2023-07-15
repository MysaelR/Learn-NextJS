import { BemVindo, Container, Head, Titulo } from "./styled";



export default function Header(){


    return(
        <Container>
            <Head>
                <Titulo>Projeto Styled</Titulo>
            </Head>
            <BemVindo color="00ff" size={50}>
                Bem vindo
            </BemVindo>

            
        </Container>
    )
}