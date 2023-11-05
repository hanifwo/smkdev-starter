import { imageUrl } from "@/lib/api";
import Image from "next/image";
import {BsFillStarFill} from 'react-icons/bs'

export default function Card({
    image,
    title,
    popularity,
    overview
}){
    return(
        <>
        <div className="rounded-md bg-gray-200">
            <Image className="rounded-t-md" src={imageUrl + image} alt={title} width="500" height="500"/>
            <div className="px-2 mt-10">
                <h3 className="font-semibold text-lg">{title}</h3>
                <div>
                    <p>{overview.length > 50 ? overview.slice(0,50) + '....' : overview}</p>
                </div>
                <p className="flex itemx-center gap-2"><BsFillStarFill />{popularity}</p>
            </div>
        </div>
        </>
    )
}