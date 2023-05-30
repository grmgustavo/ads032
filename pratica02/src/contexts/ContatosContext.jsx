import { createContext, useState } from 'react'

const ContatosContext = createContext({
    meusContatos: [
    ],
    incluirContato: () => { }
}
)


// eslint-disable-next-line react/prop-types
export function ContatosContextProvider ({ children }) {
    const [contatos, setContatos] = useState([])

    const incluir = ({ nome, telefone }) => {
        setContatos([...contatos, { nome, telefone }])
    }

    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,
    }


    return (<ContatosContext.Provider value={{ contexto }}>
        {children}
    </ContatosContext.Provider>
    )
}

export default ContatosContext