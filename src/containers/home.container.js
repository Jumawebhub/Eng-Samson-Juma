import React from "react";
import { useSelector } from "react-redux";
import { OS_TYPES } from "../utils/documents/enums";
import Windows from "./windows.container";
import Macos from "./macos.container";

function Home() {
    const selectedOS = useSelector((state) => state.systemState.selectedOS);

    return (
        <>
            {selectedOS === OS_TYPES.MACOS ? <Macos /> : <Windows />}
        </>
    );
}

export default Home;
