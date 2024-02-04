import React from "react";

function Icon({ iconPath }: { iconPath: string }) {
    return <img src={iconPath} className="px-[10px]" />;
}

export default Icon;
