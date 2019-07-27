import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/techan.ts',
    output: {
        file: `dist/techan.js`,
        name: 'techan',
        format: 'umd'
    },
    plugins: [
        terser(),
        typescript(/*{ plugin options }*/)
    ]
}