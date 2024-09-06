import {useRef} from 'react'
import Cliente from '../components/Cliente'


const Login =()=>{

    //Hook - useRef retorna uma referência a um elemento ou componente
    //sem ser renderizado novamente

    const usuario=useRef();
    const senha=useRef();

    //pegando os dados do usuario e senha e guardando na sessão
    const getUsuario = sessionStorage.getItem("usuario");
    const getSenha = sessionStorage.getItem("senha");

    //criando a funçao handleLogin
    const handleLogin=()=>{

        if(usuario.current.value =="Admin" && senha.current.value =="123456"){
            alert("Seja bem Vindo ao Site")

            //criando um token de autenticação

            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)

            sessionStorage.setItem("usuario","Admin");
            sessionStorage.setItem("senha",token);

        }
        else{
            alert("Usuário/Senha Inválidos")
        }

    }


    return(
        <section>
            {/*usando condição ternária para chamar o componente cliente*/}

            {getUsuario && getSenha ? (

                <Cliente/>
            ):


            <form onSubmit={handleLogin}>
                <p>
                    Usuário:
                    <input type="text" placeholder="Digite seu usuário" ref={usuario}/>
                </p>
                <p>
                    Senha:
                    <input type="password" placeholder="Digite sua senha" ref={senha} />
                </p>
                <button type="submit">Entrar</button>
            </form>
            }
       
        </section>
    )
}
export default Login