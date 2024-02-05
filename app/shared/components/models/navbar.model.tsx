import Icon from "../generics/Icon";

export type NavbarOptionType = {
    link: string;
    text?: string;
    Icon?: () => JSX.Element;
    action?: boolean;
};

export const navbarOptions: NavbarOptionType[] = [
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
        Icon: () => <Icon />,
        action: true,
    },
    {
        link: "",
        text: "ES",
        action: true,
    },
    {
        link: "",
        text: "Sitios",
        action: true,
    },
];
