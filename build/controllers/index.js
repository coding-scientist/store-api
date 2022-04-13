"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const get = (req, res) => {
    res.status(200).send(`
		<h1>Hello from Express!</h1>
		<a href="/api/v1/products">Product route</a>
	`);
};
exports.get = get;
//# sourceMappingURL=index.js.map