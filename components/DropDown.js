import styled from "styled-components";

export default function DropDown({show, children}) {
    return (
        <Container show={show} >
            {children}
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    top: 30px;
    right: 0px;
    background-color:var(--color-btn);
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    display: ${props => props.show ? 'block' : 'none'};
`;

