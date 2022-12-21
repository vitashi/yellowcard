import express from "express"

export async function helloWorld(request: express.Request, response: express.Response): Promise<void>{
    const responseBody = {
        text: "Hello World!"
    }
    response.status(200).json(responseBody)
}