

export default props => {
    return (
        <form action="">
            <div>
                <label>Nome:</label> <br />
                <input type="text" />
                <select name="" id="">
                    <option value="">Sexo:</option>
                    <option value="">Maculino</option>
                    <option value="">Feminino</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Data de Nascimento:</label><br/>
                <input type="text" /><br/>
                <label htmlFor="">Idade</label><br/>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Disciplina:</label><br/>
                <input type="text" /> 
                <br />
                <label htmlFor="">Nota:</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="">Situação Final:</label><br />
                <input type="text" />
                
            </div>
        </form>
    )
}