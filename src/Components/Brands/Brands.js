import React from 'react';

import { PhotoBrands } from "../Photo";
import images from "../../utils/images";
import { BrandsContainer, BrandsTitle, BrandsP, BrandsGrid } from "./BrandsStyles";

const Brands = () => {
    return (
        <BrandsContainer>
            <BrandsTitle>Работаю только с профессиональной косметикой</BrandsTitle>
            <BrandsP>В работе с клиентами важно использовать профессиональную, гиппоаллеренную косметику.
                И я выбираю бренды: Clarins, Clinique, Dewal, Estee Lauder, Inglot, Lancome, Loreal, MAC, Make Up For Ever,
                NYX, PAESE, Shiseido, Too Faced, Urban Decay</BrandsP>
            <BrandsGrid>
                <PhotoBrands photo={`url(${images.brand_01})`} column='1/3' row='1/1'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_02})`} column='2/4' row='2/2'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_03})`} column='4/7' row='1/2'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_04})`} column='5/7' row='2/2'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_05})`} column='7/9' row='1/2'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_06})`} column='8/10' row='2/2'></PhotoBrands>
                <PhotoBrands photo={`url(${images.brand_07})`} column='10/12' row='1/2'></PhotoBrands>
            </BrandsGrid>
        </BrandsContainer>
    )
}

export default Brands;