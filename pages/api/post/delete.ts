import { connectDB } from "@/app/util/database";
import { Console } from "console";
import { ObjectId } from "mongodb";

export default async function handler(req:any, res:any){
    if (req.method === "DELETE") {
        try{
            // 페이지 이동 
            const db = (await connectDB).db("forum");
            let result = await db.collection('post').deleteOne({_id : new ObjectId(req.body)});
            console.log(result)
            res.status(200).json('삭제완료')
        } catch(error) {
            return res.status(500).json("서버오류입니다.")
        }
    }
}