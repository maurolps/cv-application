import { svgSun, svgMoon } from "../assets/svgs";
import '../styles/darkmode.css'

const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                {svgSun}
                {svgMoon}
            </label>
        </div>
    );
};

export default DarkMode;