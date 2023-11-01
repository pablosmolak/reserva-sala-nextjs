import Button from '@/components/Button'
import Cabecalho from '@/components/Cabecalho'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Option from '@/components/Option'
import Select from '@/components/Select'
import TextArea from '@/components/TextArea'
import { api } from '@/services/api'
import styles from '@/styles/Home.module.css'
import { useForm } from 'react-hook-form'



export default function Home() {

  const {handleSubmit, control, formState:{errors}} = useForm()

  async function cadastrar(dados){
    try {
      console.log(dados)
      const resp = api.post('/reservas', dados)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Cabecalho/>
      <div>
        <section>
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
            <Button/>
          </form>
        </section>
        <section>

        </section>
      </div>
      
    </>
  )
}
