import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";
export default async function handler(req:any, res:any){

    if (req.method === "POST") {
        try{
            // 페이지 이동 
            const db = (await connectDB).db("forum");
            let save = {
                content: req.body.comment,
                parent: req.body._id,
                author: '작성자 이메일'
            }
            let result = await db.collection("post").insertOne(req.body)
            
            return res.status(200);
        } catch(error) {
            return res.status(500).json("서버오류입니다.")
        }
    }
}