import Hero from "./sections/hero";
import Benefit from "./sections/benefit";
import Collection from "./sections/collection";
import Advert from "./sections/advert";
import Products from "./sections/products";
import Deals from "./sections/deals";
import Sneakers from "./sections/sneakers";
import Footer from "./sections/footer";
import You from "./sections/you";
import Navbar from "./sections/navbar";



export default function Home() {
  return (
    <main>
    <Navbar/>
     <Hero/>
     <Benefit/>
     <Collection/>
     <Advert/>
     <Products/>
     <Deals/>
     <Sneakers/>
     <You/>
     <Footer/>
    </main>
  );
}
