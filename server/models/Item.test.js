const Item = require("./Item");
const sequelize = require("../db");
const items = require("../items.json");

describe("Model test", () => {

    beforeAll(async () => {
        await sequelize.sync({ force: true })
    })

    test("can create item", async function() {
        await Item.bulkCreate(items);
        const foundItem = await Item.findByPk(1);
        expect(foundItem).toEqual(expect.objectContaining(items[0]));
    })
})