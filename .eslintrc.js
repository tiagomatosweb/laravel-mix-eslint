module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "plugin:vue/essential",
        'airbnb-base'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'indent': 'off',
        'indent-legacy': ['error', 4],
        'no-param-reassign': ['error', {'props': false}],
        'no-console': ['error', {allow: ['warn', 'error', 'log']}],
        'no-trailing-spaces': ['error', {'skipBlankLines': true}],
        'no-underscore-dangle': ['error', {'allowAfterThis': true}],
        'no-unused-expressions': ['error', {'allowTernary': true}],
        'max-len': 'off',
        "space-before-function-paren": ["error", "never"],
        "prefer-destructuring": 'off',
    },
};