import styles from './login.module.css'

function logar(){
    
}

export default function Login(){
    return (
        <div className={styles.main}>

            <form className={styles.form}>
                <p>Login</p>

                <div className={styles.separate}>
                    <span>Nome</span>
                    <input  className={styles.inputbars} placeholder='Insira o seu username' name='nome' ></input>
                </div>
                
                <div className={styles.separate}>
                    <span>Senha</span>
                    <input className={styles.inputbars} type='password' name='senha' placeholder='Insira sua senha'></input>
                </div>        
                
            
                <span className={styles.register}>Não tem conta? <a href='#'>Registre-se!</a></span>

                <input type='submit' value='Logar' className={styles.button}></input>
            </form>
        </div>
    )   
}