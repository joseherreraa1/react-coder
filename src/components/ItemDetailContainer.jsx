import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const {iditem} = useParams();
    const [Catalogue, setCatalogue] = useState([]);

    const productosHC = [
        {
            id: 1,
            image:
            "https://medias.musimundo.com/medias/00510018-145440-145440-01-145440-01.jpg-size300?context=bWFzdGVyfGltYWdlc3w0MDEzOXxpbWFnZS9qcGVnfGhhMy9oMGYvMTA0MjIwNzY4MDEwNTQvMDA1MTAwMTgtMTQ1NDQwLTE0NTQ0MF8wMS0xNDU0NDBfMDEuanBnX3NpemUzMDB8N2E0NTVjMjNlNWNlNTUzYzAwMTI3M2YxMDAyZjc5M2JkYmFkMDc0OTMyZmNmMjY4YjI0NDJjZWU2Mzk3NjliZQ",
            title: "CELULAR SAMSUNG S22",
            category: "Celulares",
            price: "235.999,00",
            description: "Celular. Pantalla 6.1 Dynamic AMOLED 2X. Procesador: Octa core. Resolucion: 2340 x 1080 FHD+. Camara: 50.0 MP + 10.0 MP + 12.0 MP. Frontal: 10 MP. Sistema operativo Android. Almacemamiento: 128 Gb. RAM: 8 Gb. Video 4k. WIFI. USB. NFC. GPS. Navegador Chrome.Bateria: 3700 mAh. Bluetooth.",
        },
        {
            id: 2,
            image:
            "https://medias.musimundo.com/medias/00556015-146379-146379-01-146379-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wyMTc3MnxpbWFnZS9qcGVnfGhkMC9oNzUvMTAzODcwNDU3MTE5MDIvMDA1NTYwMTUtMTQ2Mzc5LTE0NjM3OV8wMS0xNDYzNzlfMDEuanBnX3NpemUzMDB8MjVjNDUwNDcyZDYxMWRhMmFlODM2ODQ0YWVhNDFhYmI2ZDBlZmJmMGUyNDZmZDgwMzNhOTI0ZjA3NDk0ZWM4Mg",
            title: "CELULAR APPLE IPHONE 13",
            category: "Celulares",
            price: "547.999,00",
            description: "Celular de 6.1 OLED. Procesador Chip A15 Bionic. Almacenamiento 256Gb / RAM 4 Gb. Camara frontal 12Mp / trasera 12Mp. NFC. USB-C. Bluetooth 5.0. Sistema operativo iOS 15. WiFi 802.11ax (6tagen.) con MIMO2x2. Radio. Graba y reproduce video. GPS. Navegador: Chrome. Un gran salto en la duracion de la bateria. Pantalla Super Retina XDR. Diseno resistente con ceramic shield. Mejores fotos y videos con poca luz. Modo cine con baja profundidad de campo y cambios de enfoque automaticos."
        },
        {
            id: 3,
            image:
            "https://medias.musimundo.com/medias/00590026-146931-146931-01-146931-01.jpg-size300?context=bWFzdGVyfGltYWdlc3wzNDk2NHxpbWFnZS9qcGVnfGg5YS9oMTIvMTA0MTUzNTU3MjM4MDYvMDA1OTAwMjYtMTQ2OTMxLTE0NjkzMV8wMS0xNDY5MzFfMDEuanBnX3NpemUzMDB8N2EyM2Y3YWY3OWU4NzdjMjQzYmI1YmQxZjhkZDI1M2QyM2Q4OGYyOGE1ZjZkMTRlYThmMjI2ODRlZjNmMzA4Zg",
            title: "CELULAR SAMSUNG Z FOLD4",
            category: "Celulares",
            price: "399.999,00",
            description: "",
        },
        {
            id: 4,
            image:"https://medias.musimundo.com/medias/00597014-146976-146976-01-146976-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w3NTI3NHxpbWFnZS9qcGVnfGgxMi9oODIvMTA0MTE1MjE2MDU2NjIvMDA1OTcwMTQtMTQ2OTc2LTE0Njk3Nl8wMS0xNDY5NzZfMDEuanBnX3NpemU1MTV8NjZlNzgxYTFlYWM4MjRlNmFjMzVhNWViZjc4OGRhNmFhZDY0ZGNhNTIyNTkzOWFmZDM5NGRjMTkwOTY0OGQwMg",
            title: "SMART LED TV SAMSUNG 75 PULGADAS 4K UHD",
            category: "Televisores",
            price: "377.999,00",
            description: "El potente 4K Upscaling garantiza una resolución de hasta 4K real para el contenido que quieras. Además, experimentarás expresiones de colores más realistas gracias a su sofisticada tecnología de Color Mapping.",
        },
        {
            id: 5,
            image:"https://medias.musimundo.com/medias/00552021-146196-146196-01-146196-01.jpg-size515?context=bWFzdGVyfGltYWdlc3wxMjY4MDF8aW1hZ2UvanBlZ3xoMDUvaDY0LzEwNDA3NzU4Mjk5MTY2LzAwNTUyMDIxLTE0NjE5Ni0xNDYxOTZfMDEtMTQ2MTk2XzAxLmpwZ19zaXplNTE1fDJlZjRjYzg4MjNjODhhMGU5M2Y4NmE0NzU3NjRkMGMyZjU1Mzk5Nzc3NmU2MWJlNDNmYjZjOTczOGUxYzJiOTc",
            title: "SMART LED TV LG 75 PULGADAS 4K UHD",
            category: "Televisores",
            price: "399.999,00",
            description: "Los televisores LG UHD superan tus expectativas en todo momento. Experimenta una calidad de imagen real ycolores vivos con una precisión cuatro veces superior a la de Full HD.",
        },
        {
            id: 6,
            image:"https://medias.musimundo.com/medias/00589003-146977-146977-01-146977-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w4ODQ3OHxpbWFnZS9qcGVnfGg5Yy9oZTIvMTA0MTE1MjIzOTIwOTQvMDA1ODkwMDMtMTQ2OTc3LTE0Njk3N18wMS0xNDY5NzdfMDEuanBnX3NpemU1MTV8MzBkZTRmMzlhMTQyNzJhOGE3YjJmNjYxN2ExODNmOWIzZTcyNTEzMmU1NDZkN2M4ZTNjN2QyMzYzMDYzZmI3NA",
            title: "SMART LED ANDROID TV PHILIPS 75 PULGADAS 4K UHD",
            category: "Televisores",
            price: "361.599,00",
            description: "Televisor Smart Android LED 4K UHD (3840 x 2160), con tecnologia Ambilight en 3 lados. Sistema operativo Android TV 11. Procesador Quad Core. Tamano de memoira (flash) 16Gb. Control por voz con el Asistente de Google, compatible con Alexa. HDR para imagenes mas vibrantes y brillantes. Motor de imagen P5 para mas profundidad, colores mas intensos y naturales, contraste nitido y movimiento muy fluido. Diseno atractivo, elegante y ultra fino. Dolby Vision y Dolby Atmos para vision y sonido cinematografico. DTS Play-Fi para conectar parlantes compatibles en cualquier habitacion. Se puede ajustar el soporte para complementar con una barra de sonido. Ideal para jugar con cualquier consola gracias a su bajo tiempo de latencia. Conectividad: 4 HDMI. 2 USB. Wi-Fi 802.11ac, 2x2, doble banda, Bluetooth 5.0. Salida de audio digital (optica). Ethernet-LAN RJ-45, Salida de auriculares, Conector de servicio, Antena IEC75. Medidas con soporte (alt-anch-prof) 103.2 x 167 x 36.1. Compatible con soporte de pared: 300 x 300 mm. Incluye Cable de alimentacion, Soporte para la mesa, Control remoto, 2 pilas AAA",
        },
        ]; 

        useEffect(() => {

            const fetching = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productosHC)
                },);
            })
            fetching.then((res) => {
                (iditem || isNaN(iditem)) && setCatalogue(res.find(((el) => el.id == iditem))) 
            })
            fetching.catch((err) => console.log(err))
        }, [iditem])
    
        return (
            (Catalogue.length === 0) ?
            <div className='loading-wrapper'><div className='loading-circle'></div></div> : <>
            <ItemDetail productosHC={Catalogue}/></>
        )
    }
