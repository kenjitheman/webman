module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    rules: {
        "indent": ["error", 4],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "no-console": "warn",
        "no-debugger": "warn",
        "eqeqeq": "error",
        "camelcase": "error",
        "no-trailing-spaces": "error",
        "comma-dangle": ["error", "never"],
        "spaced-comment": ["error", "always"]
    }
};
