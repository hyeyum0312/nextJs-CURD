import { connectDB } from "../util/database";
import Link from "next/link";
import DetailLink from "./DetailLinke";

export default async function List() {
  const client = await connectDB;
  const db = client.db("forum");
  let result =  await db.collection("post").find().toArray(); //컬렉션의 모든 document꺼내오기
  const list = result;
  console.log(result);


    return (
      
      <div className="list-bg">
        {
          list.map((item:any,i:number)=>
          <div className="list-item" >
              <Link href={`/detail/${item._id}`}>
                <h4>{item.title}</h4>
              </Link>
              <Link href={`/edit/${item._id}`}>✏️</Link>
              <p>{item.content}</p>
              <DetailLink></DetailLink>
            </div>
          )
        }
        
      </div>
    )
  } 