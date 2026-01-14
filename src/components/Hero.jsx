import { Container } from "./Container";
import { Button } from "./Button";
import { Grid } from "./theme/Hero";


export const Hero = () =>{
    return(
        <div className = "relative">
            <Container className = "relative z-10 pt-10 lg:py-16 space-y-16">
                <div className="text-center max-w-2xl mx-auto px-16 lg:px-0 space-y-7">
                <h1 className ="hero">
                    Build <span className=" bg-clip-text text-transparent bg-gradient-to-b from-p-3 to-p-2"> Modern </span>Saas for Startups

                </h1>
                <p className="body-1 text-n-5">
                    Building frontend experiences that make sense

I help turn ideas into clean, scalable, and user-focused frontend interfaces.
From understanding the problem to delivering a polished product, my approach is structured, thoughtful, and focused on real impact.
                </p>
                <Button theme="primary" href="">Pricing and plans</Button>
                </div>
            </Container>
            <Grid/>
        </div>
    )
}