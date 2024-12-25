import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";


export function AllImgs({ imgsUrl }) {
    const [imgsHeight, setImgsHeight] = useState(380);
    const [imgsWidth, setImgsWidth] = useState(380);

    useEffect(() => {
        const handleResize = () => {
            setImgsHeight(window.innerWidth > 650 ? 380 : 200);
            if (window.innerWidth > 970) setImgsWidth(window.innerWidth / 5 * 3)
            else setImgsWidth(window.innerWidth + (window.innerWidth < 500 ? -50 : -100))
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main>
            <SimpleImageSlider
                width={imgsWidth}
                height={imgsHeight}
                images={imgsUrl}
                showBullets={true}
                showNavs={true}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
        </main>
    )
}