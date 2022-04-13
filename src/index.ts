import db from './db/connect';
import express from 'express';
import 'dotenv/config';
import errorHandler from './middleware/error-handler';
import notFound from './middleware/404';
import { productRouter } from './routes/products';
import { indexRouter } from './routes/index';
const port = process.env.PORT;

const server = express();

const main = async () => {
	try {
		await db.initialize();

		server.listen(port, () =>
			console.log(`App listening on http://localhost:${port}`)
		);
	} catch (error) {
		console.error(error);
	}

	server.use(express.json());
	server.use(express.urlencoded({ extended: false }));
	server.use(errorHandler);
	server.use('/', indexRouter);
	server.use('/api/v1/products', productRouter);
	server.use('*', notFound);
};

main();
