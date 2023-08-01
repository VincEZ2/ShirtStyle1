import { proxy } from "valtio";

const state = proxy ({
    intro: true,
    color: '#F5F5F5',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './my_logo3.png',
    fullDecal: './my_logo3.png',
});

export default state;