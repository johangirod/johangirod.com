import style from 'typography-theme-parnassus';
import Typography from 'typography';

const newStyle = {
    ...style,
    headerFontFamily: ['Lora', 'serif'],
    bodyFontFamily: ['Merriweather Sans', 'sans-serif'],
    googleFonts: [
        { name: 'Lora', styles: ['400', '700'] },
        { name: 'Merriweather Sans', styles: ['400', '700'] },
    ],
};

export default new Typography(newStyle);
