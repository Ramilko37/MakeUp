import React from "react";
import { PricesContainer,
        PricesContent,
        PricesP,
        PricesSmallP,
        PricesTitle,
        PricesItem,
        PricesSubtitle,
     } from "./PricesStyles";

const Prices = () => {
    return (
        <PricesContainer>
            <PricesTitle>Стоимость</PricesTitle>
                <PricesContent>
                <PricesItem>
                    <PricesSubtitle margin='0 auto'>Макияж и укладка</PricesSubtitle>
                    <PricesP>5000 ₽</PricesP>
                    <PricesSmallP marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Макияж и прическа</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Предварительная консультация</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Бесплатный выезд в пределах МКАД</PricesSmallP>
                </PricesItem>
                <PricesItem>
                    <PricesSubtitle>Макияж</PricesSubtitle>
                    <PricesP>5000 ₽</PricesP>
                    <PricesSmallP marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Макияж и прическа</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Предварительная консультация</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Бесплатный выезд в пределах МКАД</PricesSmallP>
                </PricesItem>
                </PricesContent>
         
        </PricesContainer>
    )
}

export default Prices;