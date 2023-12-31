import React, { useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

// const Circle = styled.div`
//     width: 5rem;
//     height: 5rem;
//     background: ${(props) => props.color || "black"};
//     border-radius: 50%;
//     ${(props) =>
//         props.huge &&
//         css`
//             width: 10rem;
//             height: 10rem;
//         `}
// `;

const palette = {
    blue: "#228be6",
    gray: "#495057",
    pink: "#f06595",
};

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const ButtonGroup = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

function App() {
    const [dialog, setDialog] = useState(false);
    const onClick = () => {
        console.log("삭제");
        setDialog(true);
    };

    const onConfirm = () => {
        console.log("확인");
        setDialog(false);
    };

    const onCancle = () => {
        console.log("취소");
        setDialog(false);
    };

    console.log("APP 랜더링");

    return (
        <ThemeProvider theme={{ palette }}>
            <>
                <AppBlock className="App">
                    <ButtonGroup>
                        <Button size="large" onClick={onClick}>
                            삭제
                        </Button>
                        <Button color="gray">Button</Button>
                        <Button color="pink" size="small">
                            Button
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog
                    title="정말로 삭제하시겠습니까?"
                    confirmText="확인"
                    cancelText="취소"
                    onConfirm={onConfirm}
                    onCancle={onCancle}
                    visible={dialog}
                >
                    데이터를 정말로 삭제하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
}

export default App;
