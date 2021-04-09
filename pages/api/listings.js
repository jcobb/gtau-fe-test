var shuffle = require("shuffle-array");

const data = [
    {
        title: "2005 Ferrari F430 Convertible",
        description:
            "We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD",
        imgUrl: "/img/ferrari01.webp",
        price: 299999,
        location: "Sydney, NSW",
    },
    {
        title: "2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible",
        description:
            "Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.",
        imgUrl: "/img/ferrari02.webp",
        price: 249990,
        location: "Taralgon, VIC",
    },
    {
        title:
            "2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe",
        description:
            "This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine",
        imgUrl: "/img/ferrari03.webp",
        price: 148888,
        location: "Perth, WA",
    },
    {
        title: "1979 Ferrari 308 GTB Red 5 Speed Manual Coupe",
        description:
            "1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs",
        imgUrl: "/img/ferrari04.webp",
        price: 179990,
        location: "Hobart, TAS",
    },
    {
        title: "1997 Ferrari F355 GTS Manual Coupe",
        description:
            "For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.",
        imgUrl: "/img/ferrari05.webp",
        price: 200000,
        location: "Sydney, NSW",
    },
    {
        title: "Ferrari spare parts",
        description:
            "Wanted to buy: spare parts for my Ferrari. Will travel to inspect",
        price: "Wanted",
        location: "Adelaide, SA",
    },
];

export default (req, res) => {
    const remove = Math.floor(Math.random() * Math.floor(6));
    const response = shuffle(data, { copy: true }).splice(0, remove);

    res.statusCode = 200;
    res.json(response);
};
