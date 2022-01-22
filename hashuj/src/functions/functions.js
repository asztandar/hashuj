
export const isEmpty = (value) =>{
    return (value?true:false)
}
/**
 *
 * @param {{value: string}} value
 */
export const goodLenght = (value) =>{
    return(value.length!==32?false:true)
}



