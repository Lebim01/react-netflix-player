import React, { createContext, useContext } from 'react'

export const PlayerContext = createContext()

const PlayerContextProvider = ({ children, ...props }) => {
    return (
        <PlayerContext.Provider value={{ ...props }}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    const context = useContext(PlayerContext)
    return context
};

export default PlayerContextProvider