

export const required =value => {
    if (value) return undefined
    if (!value) return "Type text!!!"
}



 export const maxLength = (max) => (value)  =>
    value && value.length > max ? `Max length ${max} symbols` : undefined
   

