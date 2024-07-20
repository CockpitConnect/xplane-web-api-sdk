module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:@typescript-eslint/recommended", "prettier"],
    env: {
        es2022: true,
        node: true,
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    rules: {
        // strict: 1,
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true,
            },
        ],
        indent: ["error", 4, { SwitchCase: 1, ignoredNodes: ["PropertyDefinition"] }],
        // "object-curly-spacing": ["error", "always"],
        // "brace-style": ["error", "1tbs"],
        // curly: ["error", "all"],
        // semi: ["error", "always"],
    },
};
