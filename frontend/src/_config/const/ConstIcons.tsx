import { ConstIconInterface } from "../interfaces/Interface";

import { VscAttach } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import colros from "../images/colros.png";


const constIcons = [
    {
        name: "clipsAnexo",
        component: <VscAttach />,
    },
    {
        name: "delete",
        component: <VscChromeClose />,
    },
    {
        name: "check",
        component: <VscCheck />,
    },
    {
        name: "arrowRight",
        component: <VscChevronRight />,
    },
    {
        name: "arrowLeft",
        component: <VscChevronLeft />,
    },
    {
        name: "imgExemplo",
        src: colros,
    }
];

export default constIcons;