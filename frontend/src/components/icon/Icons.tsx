import constIcons from "../../_config/const/ConstIcons";
import { IconInterface } from "../../_config/interfaces/interface";

export default function Icons(props: IconInterface) {
    const icon = constIcons.find(ci => ci.name === props.icon);

    return (
        <span onClick={props.onClick} title={props?.title} className={props?.class}>

        </span>
    );
}