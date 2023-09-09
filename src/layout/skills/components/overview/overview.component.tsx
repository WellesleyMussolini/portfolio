import React from "react";
import Carousel from "../carousel/carousel.component";
import { responsiveness } from "../../mock/responsiveness.mock";
import { OverviewProps } from "./overview.interface";
import Card from "../card/card.component";

const Overview = ({ skillsMock }: OverviewProps) => {
    const [icons, setIcons] = React.useState<OverviewProps["skillsMock"]>([]);

    React.useEffect(() => { setIcons(skillsMock) }, [skillsMock]);

    return (
        <Carousel
            card={icons?.map((card, index) => (<Card card={card} index={index} />))}
            responsiveness={responsiveness}
        />
    )
};

export default Overview;