export const AuthReducer=(s={isLog:false},a)=>{

switch(a.type)
{
    case 'toggle' :return {isLog:!s.isLog}
    
    default : return s
}

}