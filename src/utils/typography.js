import style from 'typography-theme-parnassus';
import Typography from 'typography';

const newStyle = {
    ...style,
    headerFontFamily: ['Lora', 'serif'],
    googleFonts: [...style.googleFonts, { name: 'Lora', styles: ['400', '700'] }],
};
export default new Typography(newStyle);
