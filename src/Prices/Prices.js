import React from "react";
import { PricesContainer,
        PricesContent,
        PricesP,
        PricesSmallP,
        PricesTitle,
        PricesWrapper,
        PricesSubtitle } from "./PricesStyles";

const Prices = () => {
    return (
        <PricesContainer>//поискать решение сделать норм ширину
            <PricesTitle>Стоимость</PricesTitle>
            <PricesWrapper>
                <PricesContent>
                    <PricesSubtitle margin='0 auto'>Макияж и укладка</PricesSubtitle>
                    <PricesP>5000 ₽</PricesP>
                    <PricesSmallP marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Макияж и прическа</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Предварительная консультация</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Бесплатный выезд в пределах МКАД</PricesSmallP>
                </PricesContent>
                <PricesContent>
                    <PricesSubtitle>Макияж</PricesSubtitle>
                    <PricesP>5000 ₽</PricesP>
                    <PricesSmallP marginBottom='36px'>До 28 февраля 6̶5̶0̶0̶</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Макияж и прическа</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Предварительная консультация</PricesSmallP>
                    <PricesSmallP marginBottom='4px'>Бесплатный выезд в пределах МКАД</PricesSmallP>
                </PricesContent>
            </PricesWrapper>
        </PricesContainer>
    )
}

export default Prices;