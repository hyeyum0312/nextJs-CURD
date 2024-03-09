import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const client = await connectDB;
    const db = client.db("forum");
    let result =  await db.collection("post").findOne({_id: new ObjectId(props.params.id)});

    return (
        
    <div className="list-bg">
        <div className="list-item">
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    </div>
    )
}