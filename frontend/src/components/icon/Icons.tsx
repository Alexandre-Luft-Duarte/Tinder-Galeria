import constIcons from "../../_config/const/ConstIcons";
import { IconInterface } from "../../_config/interfaces/Interface";

export default function Icons(props: IconInterface) {
    const icon = constIcons.find(ci => ci.name === props.icon);

    if (!icon) {
        return null;
    }

    return (
        <span onClick={props.onClick} title={props?.title} className={props?.class}>
            {icon.component 
                && icon.component
            }
            {icon.src &&
                <img src={icon.src} alt={icon.name} />
            }

        </span>
    );
}