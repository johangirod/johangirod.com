import style from 'typography-theme-parnassus';
import Typography from 'typography';

const newStyle = {
    ...style,
    headerFontFamily: ['Lora', 'serif'],
    bodyFontFamily: ['Lato', 'sans-serif'],
    googleFonts: [{ name: 'Lora', styles: ['400', '700'] }, { name: 'Lato', styles: ['400'] }],
};
export default new Typography(newStyle);
