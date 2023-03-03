import *as F from './form'
export default _ => {
    return (
        <F.Formu>
            <div className="area-input">
                <input type="text" name='Estabelicimento' placeholder='Nome do Estabelicimento:' className='nomeEstab' />
                <input type="text" name='Endereço' placeholder='Endereço:' className='endereco' />
            </div>
            <select name="Area" id="Area">
                <option value="Area">Área:</option>
                <option value="U">Urbana</option>
                <option value="R">Rural</option>
            </select>
            <select name="Turno" id="Turno">
                <option value="Turno">Turno:</option>
                <option value="M">Matutinino</option>
                <option value="V">Vespetino</option>
            </select>
            <input type="date" name='' />
        </F.Formu>
    )
}