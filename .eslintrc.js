module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                "**/scr/**/*.{test,stories}.{ts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            "rules": {
                "i18next/no-literal-string": "off",
                "max-len": "off"
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
        "react",
        "i18next",
        "react-hooks"
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
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "warn",
        "react/no-deprecated": "warn",
        "@typescript-eslint/naming-convention": "warn",
        "@typescript-eslint/consistent-type-imports": "off",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to", "name"]
            }
        ],
        "no-param-reassign": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/display-name": "off"
    },
    globals: {
        "__IS_DEV__": true
    }
}
