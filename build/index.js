"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_1 = __importDefault(require("./db/connect"));
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const _404_1 = __importDefault(require("./middleware/404"));
const products_1 = require("./routes/products");
const index_1 = require("./routes/index");
const port = process.env.PORT;
const server = (0, express_1.default)();
const main = async () => {
    try {
        await connect_1.default.initialize();
        server.listen(port, () => console.log(`App listening on http://localhost:${port}`));
    }
    catch (error) {
        console.error(error);
    }
    server.use(express_1.default.json());
    server.use(express_1.default.urlencoded({ extended: false }));
    server.use(error_handler_1.default);
    server.use('/', index_1.indexRouter);
    server.use('/api/v1/products', products_1.productRouter);
    server.use('*', _404_1.default);
};
main();
//# sourceMappingURL=index.js.map