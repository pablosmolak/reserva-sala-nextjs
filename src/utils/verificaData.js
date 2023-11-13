export const verifica = (dataInicio,dataFim) => {
    
    dataInicio = new Date(dataInicio)
    dataFim = new Date(dataFim)
    
    if(dataFim < dataInicio){
        return true
    }
    
    return
  }