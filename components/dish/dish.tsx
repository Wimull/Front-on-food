import { DishDetails } from "..";
import Image from "next/image";
import Styles from "./dish.module.css";
let img: string
fetch("https://api.imersaofx.danieldcs.com/deliveries?city=sao-paulo-sp", {
	method: "GET",
	credentials: "omit",
	headers: {
		"Authentication": "Bearer YW5pbmhhc2lsdmFAdHV0YW5vdGEuY29t",
		'Content-Type': 'application/json',
		"access-control-allow-origin": "*"
	}
}).then((x) => {	
	return x.json()
}).then((y) => img = y[0].picture)


export function Dish() {
	return (
		<div className={Styles.dish}>
			<div className={Styles.wrapper}>
				<Image
					src={img}
					alt="Prato"
					width={592}
					height={312}
					layout="responsive"
				/>
			</div>
			<div>
				<div className={Styles.header}>
					<h2>
            Nome do Produto
          </h2>
				</div>
				<div className={Styles.details}>
					<DishDetails type="reviews" title="(201)" subtitle="4,5" />
					<DishDetails type="category" title="Categoria" />
					<DishDetails type="delivery" title="30 - 40 min" />
				</div>
			</div>
		</div>
	);
}
