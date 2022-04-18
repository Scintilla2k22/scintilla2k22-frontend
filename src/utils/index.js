export const asset  =  process.env.PUBLIC_URL


export const getDate = (s) =>  {

    let x = new Date(s);
    
    let nx = x.toDateString()

    return nx;
}