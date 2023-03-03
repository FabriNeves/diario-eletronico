import *as F from './form'
export default _ =>{
    return(
        <F.Formu>
            <label htmlFor="">Nome do Estabelicimento: </label><br />
            <input type="text" /><br />
            <label htmlFor="">Turno:</label><br />
            <input type="text" /><br />
            <label htmlFor="">Endereço:</label><br />
            <input type="text" /><br />
            <label htmlFor="">Área:</label><br />
            <input type="text" /><br /> 
            <label htmlFor="">Ano:</label><br />
            <input type="text" />
        </F.Formu>
    )
}