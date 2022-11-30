const chai = require('chai');
const server = require('../server');
const chaiHttp = require("chai-http");
const Tutorial = require('../Models/tutorial.model');

//Assertion Style 
chai.should();
chai.use(chaiHttp)


describe('Tutorial APIs', () => {
    //Test the Get route 
    describe("GET/api/tutorials", () => {
        it("It should GET all the tutorials", (done) => {
            chai.request(server)
                .get("/api/tutorials")
                .end((err, response) => {
                    console.log(response)
                    response.should.have.status(200);
                    done();
                })

        })

        it("It should not GET all the tutorials", (done) => {
            chai.request(server)
                .get("/api/tutorial")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                })

        })
    })

    //Test the Post route 
    describe("POST/api/tutorials", () => {
        it("It should POST a new tutorial", (done) => {

            const tutorial = new Tutorial({

                title: "Tutorial 4",
                description: "This is description",
                published: true
            });

            chai.request(server)
                .post("/api/tutorials")
                .send(tutorial)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.a('object');
                    // response.body.should.have.property('published',true);
                    response.body.published.should.be.equal(true)
                    done();
                })

        })


    })

    //Test the Delete route
    // describe("DELETE/api/tutorials", () => {
    //     it("It should DELETE all the tutorials", (done) => {
    //         chai.request(server)
    //             .delete("/api/tutorials")
    //             .end((err, response) => {

    //                 response.should.have.status(200);
    //                 done();
    //             })

    //     })



    })


