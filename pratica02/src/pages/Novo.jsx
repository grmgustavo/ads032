import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ContatosContext from '../contexts/ContatosContext';

export default function Novo () {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { meusContatos, incluirContato } = useContext(ContatosContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        incluirContato(data);
        navigate('/');
    };

    return (
        <>
            <h2>Novo contato</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" {...register('nome', { required: 'Campo obrigatório' })} />
                    {errors.nome && <span>{errors.nome.message}</span>}
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" {...register('telefone', { required: 'Campo obrigatório' })} />
                    {errors.telefone && <span>{errors.telefone.message}</span>}
                </div>
                <div>
                    <input type="submit" value="Salvar" />
                </div>
            </form>
            <ul>
                {/* eslint-disable-next-line react/jsx-key*/}
                {typeof meusContatos}
            </ul>
        </>
    );
}
