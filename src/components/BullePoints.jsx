import { Container } from "./Container";
import { Heading } from "./Heading";
import {bulletPoints} from "../constants";

export const BullePoints = () =>{
    return (
        <>
        < Heading title= "EzeCode" subtitle = "How does it works?"/>
        <Container>
            <div className="w-full max-w-6xl mx-auto py-5 lg:py-10 spce-y-10 lg:space-y-24">
                {bulletPoints.map((bulletPoint)=>(
                    <div key={bulletPoint.id}
                     className={`
                        ${bulletPoint.id % 2===0 ? "flex-row" : " lg:flex-row-reverse"}
                        flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-28`}>
                        <div className="w-full flex justify-center lg:w-7/12">
                            <img src={ bulletPoint.image} alt={bulletPoint.alt} width={bulletPoint.width} height={bulletPoint.height}
                            className="px-20 lg:px-0"/>
                        </div>
                        <div className="w-full lg:w-5/12 space-y-5 text-center lg:w-7/12">
                            <h3 className="h3">{bulletPoint.title}</h3>
                            <p className="body-1 text-n-5">{bulletPoint.text}</p>
                        </div>

                    </div>

                ))}

            </div>

        </Container>
        </>
    )
}