import { Slider } from "./components/Slider";
import { Content } from "./components/Content";


export function App() {

    const slides = [
        { id: 1, title: "Explore South America under $1000", url: "images/img1.jpg" },
        { id: 2, title: "Fantastic sales on accomondation", url: "images/img2.jpg" },
        { id: 3, title: "2016 BEST SUMMER DESTINATIONS", url: "images/img3.jpeg" },
    ]


    return (
        <div className="App">
            <Slider slides={slides} />
            <Content />
        </div>
    )
}
