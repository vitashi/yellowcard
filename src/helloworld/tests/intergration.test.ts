import request from "supertest";
import {StatusCodes} from 'http-status-codes';
import app from "../../app";

describe("HelloWorld", () => {

    beforeEach(async () => {
        
    })

    it("Calling hello world returns a 200 with the correct text",  async () => {
        const response = await request(app).get('/helloworld')
        expect(response.statusCode).toEqual(StatusCodes.OK);
        expect(response.body).toMatchObject({text: "Hello World!"})
    });
})