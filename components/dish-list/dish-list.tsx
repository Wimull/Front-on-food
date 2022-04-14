import Styles from "./dish-list.module.css"
import { Dish } from "@/components"
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";

export function DishList(){
    let product:any, setProduct:any
	const router = useRouter();
	const city = router.query.city;
	let dishesFound = "x", dishList = ""
    let data:any = {
    city: city,
    name: "Nome do Produto",
    reviewsTitle: "(201)",
    reviewsSubtitle:"4,5",
    category:"Categoria",
    delivery:"30 - 40 min",
    img: "https://storage.googleapis.com/onfood/burguer.jpg"
  };
    let dishes = [data];

	[product, setProduct] = useState({})

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
	catch (error) {console.log(error,city)}
}
useEffect(()=>{getProduct()}, [])


    if (product[0] && product != undefined) {
        dishes.pop()
        product.forEach( (element:any) =>{
        dishesFound = product.length
        data ={
            city: element.city,
            name: element.name,
            reviewsTitle:  element.reviews,
            reviewsSubtitle: element.rate,
            category: element.categoryName,
            delivery:element.deliveryEstimate,
            img: element.picture
        }
        dishes.push(data)
    })}

    return(
        <div className={Styles.list}>
            {dishes.map((y) => <Dish props={y}/> )}
        </div>
        )
    
}