import React, {useEffect, useState} from "react";
import { DishDetails } from "..";
import Image from "next/image";
import Styles from "./dish.module.css";
import { useRouter } from "next/router";
import { setFlagsFromString } from "v8";

export function Dish(props:any) {
	let data= props.props
	return (
		
		<div className={Styles.dish}>
			<div className={Styles.wrapper}>
				<Image
					src={data.img}
					alt="Prato"
					width={592}
					height={312}
					layout="responsive"
				/>
			</div>
			<div>
				<div className={Styles.header}>
					<h2>
			{data.name}
		</h2>
				</div>
				<div className={Styles.details}>
					<DishDetails type="reviews" title={`(${data.reviewsTitle})`} subtitle={data.reviewsSubtitle} />
					<DishDetails type="category" title={data.category} />
					<DishDetails type="delivery" title={data.delivery} />
				</div>
			</div>
		</div>
	);
}





