//reducer
export const counterReducer=(s={c:0},{type:a})=>
    {
        switch(a)
        {
            case 'inc': return{c:s.c+1}
            case 'dec' : return{c:s.c-1}
            case 'res' : return{c:0}
            default : return s
            
        }
    }