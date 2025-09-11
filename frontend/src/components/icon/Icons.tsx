import constIcons from "../../_config/const/ConstIcons";
import { ConstIconProps } from "../../_config/interfaces/Interface";

export default function Icons(props: ConstIconProps) {
    const icon = constIcons.find(ci => ci.name === props.icon);

    if (!icon) {
        return null;
    }

    return (
        <span onClick={props.onClick} title={props?.title} className={props?.className}>
            {icon.component 
                && icon.component
            }
            {icon.src &&
                <img src={icon.src} alt={icon.name} />
            }

        </span>
    );
}