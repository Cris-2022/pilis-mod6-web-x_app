import "./Home.css"
import { Tarjetas } from "./Tarjetas/Tarjetas"

export const Home = () => {
    return (
        <div>
            <section className="automatic">
                <img className="slider-imag" src="/src/assets/publicidad/imag-1.jpg" alt="" />
                <img className="slider-imag" src="/src/assets/publicidad/imag-3.jpg" alt="" />
                <img className="slider-imag" src="/src/assets/publicidad/imag-5.jpg" alt="" />
                <img className="slider-imag" src="/src/assets/publicidad/imag-6.jpg" alt="" />
            </section>
            <div className="grid-card">
                <Tarjetas />
            </div>
        </div>
    )
}