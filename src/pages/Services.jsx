import { Branding } from '../components/Branding';
import { CallToAction } from '../components/CallToAction';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { BullePoints } from '../components/BullePoints';
import { Pricing } from '../components/Pricing';


export default function Services() {
  return (
    <>
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <BullePoints />
      <Pricing />
      <CallToAction minify />
    </>
  );
}
