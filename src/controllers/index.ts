import { Request, Response } from "express";

export const get = (req: Request, res: Response) => {
	res.status(200).send(`
		<h1>Hello from Express!</h1>
		<a href="/api/v1/products">Product route</a>
	`)
}