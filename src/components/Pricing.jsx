
import { Heading } from "./Heading";
import { Container } from "./Container";
import { pricing } from "../constants";
import { icoCheck } from "../assets";
import { Button } from "./Button";
import { Link } from "react-router-dom";
export const Pricing = () =>{
    return(
        <div id="pricing">
            <Heading title= "EzeCode" subtitle ="Pricing"/>
            <Container>
                <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 lg:mb-16">
                    {pricing.map((price)=>(
                <div  key={price.id} className={price.featured ? "":"lg:mt-14"}>
                        <div
                        className={`
                            ${price.featured ? "bg-n-7" :"bg-n-8"}
                            rounded-xl lg:rounded-2xl p-6 lg:p-12 text-center lg:text-start
                            
                            `}
                        
                        >
                            <div className="text-caption-1 text-n-5 uppercase ">
                                {price.plan}
                            </div>
                            <div className="space-y-3">
                                <span className="h1 text-n-5">€</span>
                                <span className="h1">{price.amount}</span>

                            </div>
                            <hr className={`
                            "border-t mt-7 mb-4 lg:mt-16 mg:mb-8"
                            ${price.featured ? "border-n-6" : "border-stroke-1"}`}
                            />
                            <div className="space-y-4 pb-8  ">
                                {price.features.map((feature,idx)=>(
                                    <div key={idx} className="flex items-center justify-center lg:justify-start gap-3">
                                        <img src={icoCheck} alt="Icon Check" width={24} height={24} />
                                        <div className="body-2 text-n-3">{feature}</div>
                                        
                                    </div>

                                ))}

                               <Link to="/contact">
                                <div className="flex py-4 justify-center lg:justify-start ">
                                    <Button theme={ price.featured ? "primary" : "secondary"}>
                                        {
                                            price.amount >0 ? "Get in Touch":"Get Started for free"
                                        }

                                    </Button>

                                </div>
                               </Link>

                            </div>


                        </div>
                </div>

                    ))}

                </div>

            </Container>

        </div>
    )
}