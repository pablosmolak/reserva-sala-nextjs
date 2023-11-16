import Button from '@/components/Button'
import Cabecalho from '@/components/Cabecalho'
import Input from '@/components/Input'
import Label from '@/components/Label'
import ListTable from '@/components/ListTable'
import Mensagem from '@/components/Mensagem'
import Option from '@/components/Option'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import { api } from '@/services/api'
import styles from '@/styles/Home.module.css'
import { verifica } from '@/utils/verificaData'
import { useEffect, useState } from 'react'

export default function Home() {

  const [mensagem, setMensagem] = useState({existe:false ,texto:"", tipo:""})
  const [cadastrou, setCadastrou] = useState()
  const [mensagemData,setMensagemData] = useState("")

  const [dados, setDados] = useState({
    descricao: "",
    solicitante: "",
    sala: "",
    inicio: "",
    fim: "",
    termos: false,
  });

  async function cadastrar(e){
    try {
    
      e.preventDefault()
      console.log(e)
      if(mensagemData){
        return
      }
      
      if(!dados.descricao || !dados.solicitante || !dados.sala || !dados.inicio || !dados.fim){
        setMensagem({existe:true, texto:"Existem campos vazios no formulário!", tipo:"atencao"})
        return
      }
      
      if(!dados.termos){
        setMensagem({existe:true, texto:"Você precisa aceitar os Termos!", tipo:"atencao"})
        return
      }

      api.post('/reservas', dados)
      .then(() => {
        setMensagem({existe:true, texto:"Agendamento realizado com sucesso!", tipo:"sucesso"})
        setCadastrou(true)
        setDados({
          descricao: "",
          solicitante: "",
          sala: "",
          inicio: "",
          fim: "",
          termos: false,
        })
        setTimeout(()=>{
          setMensagem({existe:false})
          setCadastrou(false)
        },1000)

      })
      .catch(() => {
        setMensagem({existe:true, texto:"Ocorreu um erro!", tipo:"erro"})
        setTimeout(()=>{
          setMensagem({existe:false})
        },1000)
      })

    } catch (error) {
      //console.log(error)
    }
  }

  useEffect(() => {
    setMensagemData("")
    const maior = verifica(dados.inicio,dados.fim)

    if(maior){
      setMensagemData("A data de fim não pode anterior a data de inicio")
    }

  },[dados.fim,dados.inicio])

  return (
    <>
      <div className={styles.page}>
        <Cabecalho/>
        <div className={styles.test}>
        <section className={styles.corpo_form}>
          <h1 style={{"font-size": "26px"}}>Reservar Sala</h1>
          {mensagem.existe && (<Mensagem texto={mensagem.texto} tipo={mensagem.tipo}/>)}
          <form className={styles.form} onSubmit={e => cadastrar(e)}>
            <div>
              <Label texto={"Descrição"} forhtml={"descricao"}/>
              <TextArea
                placeholder="Ex.: Aula de Algoritimos"
                id="descricao" 
                linhas={3}
                value={dados.descricao}
                onChange={e => setDados({ ...dados, descricao: e.target.value})}
              />
            </div>
            <div>
              <Label texto={"Solicitante"} forhtml={"solicitante"}/>
              <Input 
                type="text" 
                placeholder="Ex.: Pablo Smolak"
                id="solicitante"
                value={dados.solicitante}
                onChange={e => setDados({...dados, solicitante: e.target.value})}
              />
            </div>
            <div style={{display:"flex","flex-direction": "column"}}>
              <Label texto={"Sala"} forhtml={"sala"}/>
              <Select
                id="sala"       
                value={dados.sala}
                onChange={e => setDados({ ...dados, sala: e.target.value })}
              >
                <Option value={''}>Escolha uma Sala</Option>
                <Option value={"Sala 1"}>Sala 1</Option>
                <Option value={"Sala 2"}>Sala 2</Option>
                <Option value={"Sala 3"}>Sala 3</Option>
                <Option value={"Sala 4"}>Sala 4</Option>
                <Option value={"Sala 5"}>Sala 5</Option>
                <Option value={"Sala 6"}>Sala 6</Option>

              </Select>
            </div>
            <div>
              <Label texto={"Inicio"} forhtml={"Inicio"}/>
              <Input 
                type="datetime-local" 
                id="inicio" 
                value={dados.inicio}
                onChange={e => setDados({...dados, inicio: e.target.value})}
              />
            </div>
            <div>
              <Label texto={"Fim"} forhtml={"Fim"}/>
              <Input 
                type="datetime-local" 
                id="fim" 
                value={dados.fim}
                onChange={e => setDados({...dados, fim: e.target.value})}  
              />
               {mensagemData && <span className={styles.erro}>{mensagemData}</span>}
            </div>
            <div className={styles.checkbox}>
              <Input
                style={{width: "20px"}} 
                type="checkbox" 
                id="termo"
                checked={dados.termos}
                onChange={e => setDados({...dados, termos: e.target.checked})}  
              />
              <Label style={{"font-size": "20px"}} texto={"Concordo com os termos?"} forhtml={"termo"}/>
            </div>
            <Button value={'Reservar sala'}/>
          </form>
        </section>
        <section className={styles.vazia}/>
        <section className={styles.corpo_table}>
            <ListTable cadastrou={cadastrou}/>
        </section>
        </div>
      </div>
      
    </>
  )
}
