// import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";

export const metadata: Metadata = {
  title: `home`,
};
const delay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  await delay(1000);
  
  return ( 
    <>
      <ProductList data={sampleData.products} title='Latest Arrivals' limit={4} />
    </>
   );
}
 
export default HomePage;