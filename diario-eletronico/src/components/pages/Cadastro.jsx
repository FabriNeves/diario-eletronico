import * as C from './styles'

export default props => {
    return (

        <C.Container>
            <form action="">
                <div className='box-area1'>
                    <label>Nome:</label> <br />
                    <input type="text" />
                    <select name="" id="">
                        <option value="">Sexo:</option>
                        <option value="">Maculino</option>
                        <option value="">Feminino</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Data de Nascimento:</label><br />
                    <input type= "date" />
                    <input type="number" placeholder='Idade:'  style={{width:60}} />
                </div>
                <div>
                    <label htmlFor="">Disciplina:</label>
                    <label htmlFor="">Nota:</label><br />
                    <input type="text" />
                    <input type="number"   style={{width:50}} />
                    <br />
                    <label htmlFor="">Situação Final:</label><br />
                    <input type="text" />

                </div>
            </form>
        </C.Container>

    )
}