import { Link } from 'react-router-dom'
import styled from 'styled-components'
import AnimateButtons from './AnimateButtons'
import { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
function RightSide() {
    const { user } = useUser();
    useEffect(() => {
        // console.log('User in RightSide:', user);
        AnimateButtons(); // Trigger the animation when the component mounts
    }, [user]);

    return (
        <Container>
            <div className='flex flex-col button-container'>
                <p className='text-4xl font-medium'>Welcome, {user ? user.name : 'Guest'}!</p>
                <Head className='text-md mb-4 font-medium editor'>Select Your Editor</Head>
                <div className='flex flex-col gap-2 items-center'>

                    <Button>
                        <Link to="/user/code-editor">Code Forge</Link>
                    </Button>
                    <Button>
                        <Link to="/user/codepen-editor">Code Canvas</Link>
                    </Button>

                </div>
            </div>
            <img src="MacBook_Air_Open_Front_L.png" alt="laptop" className='absolute right-0 bottom-0 h-[300px] w-[300px] laptop-image' />
        </Container>
    )
}

export default RightSide
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
`

const Button = styled.button`
    border: 1px solid gray;
    display: flex;
    align-items: center;
    padding: 10px 18px;
    border: none;
    outline: none;
    background-color: #151517;
    color: white;
    border-radius: 5px;
    width: 220px;
    font-size: 18px;
    border: 1px solid gray;
    cursor: pointer;
    transition: 200ms background-color ease-in;


    &:hover{
        background-color: #ECF15E;
        color: #000000e8;
        border: 1px solid black;
        transition: 0.2s background-color ease-in;
    }
`

const Head = styled.h1`
    -webkit-text-stroke: 1px #dbd9d96e;
    color:transparent;
    font-size: 35px;
    font-weight: 700;
`

