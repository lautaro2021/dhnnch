import Icon from "../generics/Icon";

type NavbarLink = {
    link: string;
    text?: string;
    Icon?: () => JSX.Element;
    border?: boolean;
};

export const navbarOptions: NavbarLink[] = [
    {
        link: "",
        text: "Nosotros",
    },
    {
        link: "",
        text: "Novedades",
    },
    {
        link: "",
        text: "Inversores",
    },
    {
        link: "",
        text: "Sumate al equipo",
    },
    {
        link: "",
        text: "Productos y Servicios",
    },
    {
        link: "",
        text: "Proveedores",
    },
    {
        link: "",
        Icon: () => <Icon iconPath="/assets/light.png" />,
        border: true,
    },
    {
        link: "",
        text: "ES",
        border: true,
    },
    {
        link: "",
        text: "Sitios",
        border: true,
    },
];
