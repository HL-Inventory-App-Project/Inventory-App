const express = require("express");
const { Item } = require("../models");
const { body, param, validationResult } = require("express-validator");
const router = express.Router();
router.use(express.json());

// Define your routes here
// As a User, I want to view all items in inventory---

router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// GET one item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch item" });
  }
});

//post Item to add item
router.post("/", 
  [
    body("name").isString().withMessage("Name must be a string"),
    body("description").isString().withMessage("Description must be a string"),
    body("price").isFloat().withMessage("Price must be anumber"),
    body("category")
      .isIn(["jewelery", "electronics", "women's clothing", "men's clothing"])
      .withMessage("Invalid category"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array())
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newItem = await Item.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ err: "Failed to add item" });
    }
  }
);

//Delete Items
router.delete("/:id", async (req, res) => {
  try {
    const deleteItem = await Item.destroy({ where: { id: req.params.id } });
    if (deleteItem) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ err: "Failed to delete item" });
  }
});

//PUT updating an Item
router.put(
  "/:id",
  [
    body("name").isString().withMessage("Name must be a string"),
    body("description").isString().withMessage("Description must be a string"),
    body("price").isFloat().withMessage("Price must be anumber"),
    body("category")
      .isIn(["jewelery", "electronics", "women's clothing", "men's clothing"])
      .withMessage("Invalid category"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array())
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const [updated] = await Item.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedItem = await Item.findByPk(req.params.id);
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Failed to update item" });
    }
  }
);

module.exports = router;
