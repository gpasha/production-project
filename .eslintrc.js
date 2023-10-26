module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "standard-with-typescript",
        "plugin:react/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "project": "tsconfig.json",
        "tsconfigRootDir": __dirname,
        "ecmaVersion": "latest",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }

    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "root": true,
    "rules": {
        "react/jsx-indent": [0, 4],
        "react/jsx-indent-props": [0, 4],
        "indent": "off",
        "@typescript-eslint/indent": [0, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "react/no-deprecated": "warn",
        "@typescript-eslint/naming-convention": "warn"
    },
    globals: {
        "__IS_DEV__": true
    }
}
