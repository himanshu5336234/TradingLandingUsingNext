/* eslint-env node */
module.exports = {
    extends: [
        "next",
        "plugin:@next/next/recommended",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "no-console": 2,
        "import/named": 2,
        "import/namespace": 2,
        "import/default": 2,
        "import/export": 2,
        "import/no-unresolved": [2, { commonjs: true, amd: true }],
    },
};
