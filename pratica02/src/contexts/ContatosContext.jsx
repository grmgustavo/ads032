import { createContext, useState } from 'react'

const ContatosContext = createContext({
    meusContatos: [],
    incluirContato: () => { },
}
)
export default ContatosContext

// eslint-disable-next-line react/prop-types
export function ContatosContextProvider ({ children }) {
    const [contatos, setContatos] = useState([])

    const incluir = (contato) => {
        setContatos([...contatos, contato])
    }

    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,
    }


    return (
        <ContatosContext.Provider value={contexto}>
            {children}
        </ContatosContext.Provider>
    )
}
