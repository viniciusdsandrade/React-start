import './Formulario.css';
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

    const times = [
        'Programacao',
        'Design',
        'Marketing',
        'Comercial',
        'Financeiro',
        'Mobile'
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Salvando')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa itens={times} label="Time"/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;