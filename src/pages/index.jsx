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
import { useState } from 'react'
import { useForm } from 'react-hook-form'



export default function Home() {

  const {handleSubmit, control, formState:{errors}, reset} = useForm()
  const [mensagem, setMensagem] = useState({existe:false ,texto:"", tipo:""})
  const [cadastrou, setCadastrou] = useState()

  async function cadastrar(dados){
    try {
      //console.log(dados)
      const resp = api.post('/reservas', dados)
                      .then(() => {
                        setMensagem({existe:true, texto:"Agendamento realizado com sucesso!", tipo:"sucesso"})
                        reset({sala: ''})
                        setCadastrou(true)
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

  return (
    <>
      <Cabecalho/>
      <div className={styles.corpo}>
        <section className={styles.corpo_form}>
          {mensagem.existe && (<Mensagem texto={mensagem.texto} tipo={mensagem.tipo}/>)}
          <form onSubmit={handleSubmit(cadastrar)}>
            <div>
              <Label texto={"Descrição"} forhtml={"descricao"}/>
              <TextArea
                placeholder="Ex.: Aula de Algoritimos"
                id="descricao" 
                name="descricao"      
                control={control}
                errors={errors}
                rules={{required:"A Descrição é Obrigatória!"}}
              />
            </div>
            <div>
              <Label texto={"Solicitante"} forhtml={"solicitante"}/>
              <Input 
                type="text" 
                placeholder="Ex.: Pablo Smolak"
                id="solicitante" 
                name="solicitante"      
                control={control}
                errors={errors}
                rules={{required:"O Solicitante é Obrigatório!"}}    
              />
            </div>
            <div>
              <Label/>
              <Select
                id="sala" 
                name="sala"      
                control={control}
                errors={errors}
                rules={{required:"A Sala é Obrigatória!"}} 
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
              <Label texto={"inicio"} forhtml={"Inicio"}/>
              <Input 
                type="datetime-local" 
                id="inicio" 
                name="inicio"      
                control={control}
                errors={errors}
                rules={{required:"A data de Inicio é Obrigatória!"}}    
              />
            </div>
            <div>
              <Label texto={"fim"} forhtml={"Fim"}/>
              <Input 
                type="datetime-local" 
                id="fim" 
                name="fim"      
                control={control}
                errors={errors}
                rules={{required:"A data de Fim é Obrigatória!"}}    
              />
            </div>
            <Button value={'Reservar sala'}/>
          </form>
        </section>
        <section className={styles.corpo_table}>
            <ListTable cadastrou={cadastrou}/>
        </section>
      </div>
      
    </>
  )
}
