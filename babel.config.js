module.exports = {
    presets: ['@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-jsx',
        {
            loose: true,
        },
    ],
};
