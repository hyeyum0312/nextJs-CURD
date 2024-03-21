export default async function handler(req:any, res:any){
    console.log(req.query);
    
    console.log('안녕');
    return res.status(200).json();
}