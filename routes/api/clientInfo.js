const express = require("express");
const router = express.Router();
const ClientInfo = require("../../models/ClientInfo");
//@route POST api/admin
//@desc Admin login
//@access Public
router.post("/", async (req, res) => {
  try {
    const clientInfo = new ClientInfo(req.body);
    await clientInfo.save();
    res.status(200).json({
      message: "Client inserted successfully",
      status: true,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
//all product
router.get("/", async (req, res) => {
  try {
    await ClientInfo.find((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "All client list!",
          status: true,
        });
      }
    }).sort({ createdAt: 'desc' });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Product By ID//
router.get("/:id", async (req, res) => {
  await ClientInfo.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      let [obj] = data;
      res.status(200).json({
        result: obj,
        message: "Client by id!",
        status: true,
      });
    }
  });
});
//due
router.post("/due", async (req, res) => {
  const { clientId, amount } = req.body
  await ClientInfo.updateOne(
    { _id: clientId },
    {
      $set: { due: amount },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Client due was updated successfully!",
          status: true,
        });
      }
    }
  );
});
//Update product
router.put("/:id", async (req, res) => {
  await ClientInfo.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Client were updated successfully!",
          status: true,
        });
      }
    }
  );
});

// Update product presentPricePerUnit
router.put("/presentPricePerUnit/:id", async (req, res) => {
  await ClientInfo.updateOne(
    { _id: req.params.id },
    {
      $set: { presentPricePerUnit: req?.body?.presentPricePerUnit },
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Present Price PerUnit were updated successfully!",
          status: true,
        });
      }
    }
  );
});

//delete product
router.delete("/:id", async (req, res) => {
  await ClientInfo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Client was deleted successfully!",
        status: true,
      });
    }
  });
});
module.exports = router;
