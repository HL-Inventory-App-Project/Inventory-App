const { execSync } = require('child_process');
execSync('npm install');

const request = require("supertest");
const sequelize = require("../db");
const Item = require("../models/Item");
const app = require("../app");
const items = require("../items.json");
let itemQuantity;

beforeAll(async () => {
    const allItems = await Item.findAll();
    itemQuantity = allItems.length;
})

describe ("GET /api/items", () => {
    it("returns 200 status code", async () => {
        const response = await request(app).get("/api/items");
        expect(response.statusCode).toBe(200);
    });

    it("returns an array of items", async () => {
        const response = await request(app).get("/api/items");
        const responseData = JSON.parse(response.text);
        let areAllItems = responseData.every(function (item) {
            const first = item.name && item.price;
            const second = first && item.description;
            const third = second && item.category;
            return  third && item.image;
        });
        expect(areAllItems).toBe(true);
    });

    it("returns correct number of items", async () => {
        const response = await request(app).get("/api/items");
        expect(response.body.length).toEqual(itemQuantity);
    });

    it("returns correct item data", async () => {
        const response = await request(app).get("/api/items");
        expect(response.body).toContainEqual(
            expect.objectContaining({
                id: 1,
                name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            })
        );
    });
});

describe("GET /api/items/:id", () => {
    it("returns correct data", async () => {
        const response = await request(app).get("/api/items/1");
        expect(response.body).toEqual(
            expect.objectContaining({
                id: 1,
                name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            })
        );
    });
});

describe("POST /api/items", () => {
    it("returns new item added to array", async () => {
        const response = await request(app)
        .post("/api/items")
        .send({
            name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            });
        expect(response.body).toEqual(
            expect.objectContaining({
                name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                category: "men's clothing",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            })
        )
    });
});

describe("PUT /api/items/:id", () => {
    it("should update first item in database", async () => {
        await request(app)
        .put("/api/items/1")
        .send({ 
            name: "Backpack",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" });
        const item = await Item.findByPk(1);
        expect(item.name).toEqual("Backpack");
    });
});

describe("DELETE /api/items/:id", () => {
    it("should delete entry by id", async () => {
        await request(app).delete("/api/items/1");
        const allItems = await Item.findAll();
        expect(allItems.length).toEqual(itemQuantity);
        expect(allItems[0].id).not.toEqual(1);
    });
});