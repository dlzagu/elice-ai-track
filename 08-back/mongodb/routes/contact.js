const express = require("express");
const router = express.Router();
const Contact = require("../model/Contact");

router.delete("/:id", (req, res) => {
  console.log("req.params", req.params); // post/xxxxxx
  console.log("req.query", req.query); // ?id=xxxxxx
  Contact.findByIdAndDelete(req.params.id, (err, contact) => {
    if (err) {
      res.writeHead(404);
      res.send("Failed to delete a blog post!");
    } else {
      res.json(contact);
    }
  });
});

router.put("/:id", (req, res) => {
  console.log("req.params", req.params); // post/xxxxxx
  console.log("req.query", req.query); // ?id=xxxxxx
  data = req.body;
  Contact.findByIdAndUpdate(
    req.params.id,
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    },
    (err, blogpost) => {
      if (err) {
        res.writeHead(404);
        res.send("Failed to update blog post!");
      } else {
        res.json(blogpost); // old post?
      }
    }
  );
});

router.post("/", (req, res) => {
  console.log("contact / req.body", req.body);
  const data = req.body;
  Contact.create(
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    },
    (err, contact) => {
      console.log(err, contact);
      if (err) {
        res.writeHead(404);
        res.send("Failed to create contact!");
      } else {
        res.json(contact);
      }
    }
  );
});

router.get("/:id", (req, res) => {
  console.log("req.params", req.params); // post/xxxxxx
  console.log("req.query", req.query); // ?id=xxxxxx
  Contact.findById(req.params.id, (err, contact) => {
    if (err) {
      res.writeHead(404);
      res.send("The contact does not exist!");
    } else {
      res.json(contact);
    }
  });
});

module.exports = router;
