import { Button } from "./Button";
import { Container } from "./Container";
import { icoArrowRight } from "../assets";
import { Link } from "react-router-dom";


export const CallToAction = ({minify = false }) =>{
    return (
        <Container>
            <div className="max-w-4xl mx-auto py-5 lg:py-10">
               <div className={`
               ${!minify ? "flex flex-col items-center":
                "flex flex-col items-center justify-between lg:flex lg:flex-row lg:iems-center "
               }
                rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-3 to-p-4 p-6 lg:p-16 gap-8 `}>
                 <div className={minify? "space-y-1 text-center lg:text-start":"space-y-4 text-center"}>
                    <div className="caption-1 text-n-1/50">Start a Conversation? </div>
                    <h3 className="h3">Ready to create something amazing?</h3>

                </div>
                <Link to="/contact">
                <Button theme="primary" className="flex items-center justify-center gap-1">
                    <span>Get in Touch</span>
                    <img src={icoArrowRight}alt="Arrow Right" width={24} height={24}/>

                </Button>
                </Link>
               </div>
                
            </div>

        </Container>
    )
}