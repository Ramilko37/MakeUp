import React from "react";
import {NavbarContainer} from "./NavbarStyles";
import Logo from "../Logo";
import {FlexBox, NavbarFlexBox} from "../FlexBox";
import {ButtonCallme, ButtonInstagram, ButtonPhone, ButtonTelegram, ButtonWhatsapp} from "../Button/Button";

const Navbar = () => {
    return (
    <NavbarContainer>
        <Logo>
            Людмила Бабакина
        </Logo>
        <NavbarFlexBox height='fit-content' alignContent='center'>
            <ButtonTelegram />
            <ButtonInstagram />
            <ButtonWhatsapp />
            <ButtonPhone>+7(926)422 86 80</ButtonPhone>
            <ButtonCallme href="https://api.whatsapp.com/send?phone=79857516594"
                          target="_blank" rel="nofollow noopener noreferrer">
                Написать в WhatsApps</ButtonCallme>
        </NavbarFlexBox>
    </NavbarContainer>
    )
};

export default Navbar;