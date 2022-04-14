import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import { PageTemplate, DishList,Dish } from "@/components";
import Styles from "../../styles/discovery.module.css"
export default function Descobrir() {
  
  let product:any, setProduct:any
  [product, setProduct] = useState({})
	const router = useRouter();
	const city = router.query.city;
	let dishesFound = "x"
  let data:any = {
    city: city,
  };

	const getProduct = async () => {
		try{
			const response = await fetch(`https://api.imersaofx.danieldcs.com/deliveries?city=${city}`, {
				method: "GET",
				credentials: "omit",
				headers: {
					"Authentication": "Bearer YW5pbmhhc2lsdmFAdHV0YW5vdGEuY29t",
					'Content-Type': 'application/json',
					"access-control-allow-origin": "*"
				}
		});
			const data:any = await response.json();
			setProduct(data)
	}
	catch (error) {console.log(error)}
}
useEffect(()=>{getProduct()}, [city])

  if (product[0] && product != undefined)  dishesFound = product.length, data.city=product[0].city;

    return (
      <PageTemplate>
        <div>
          <div className={Styles.content}>
            <h1>Opções na região de {data.city}</h1>
            <p>Encontramos {dishesFound} opções </p>
          </div>
          <div className={Styles.items}>
            <DishList />
          </div>
        </div>
      </PageTemplate>
    )}