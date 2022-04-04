import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';
import eslint from '@rollup/plugin-eslint';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const production = process.env.BUILD === 'production',
    banner = `/*! ${pkg.name} ${pkg.version} | ${pkg.author} !*/`,
    plugins = [
        nodeResolve(),
        !production ? null : eslint(),
        !production ? null : terser()
    ].filter(p => p);

export default [
    {
        input: 'src/FormDigger.js',
        output: [
            {
                file: 'dist/form-digger.js',
                format: 'es',
                name: 'FormDigger',
                banner: banner,
                sourcemap: true
            },
            {
                file: 'dist/form-digger-min.js',
                format: 'iife',
                name: 'FormDigger',
                banner: banner,
                sourcemap: true
            }
        ],
        plugins: plugins
    },
    {
        input: 'src/Paginator.js',
        output: [
            {
                file: 'dist/paginator-min.js',
                format: 'iife',
                name: 'Paginator',
                banner: banner,
                sourcemap: true
            }
        ],
        plugins: plugins
    }
];
