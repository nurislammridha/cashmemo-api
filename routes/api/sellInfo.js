const express = require("express");
const router = express.Router();
const SellInfo = require("../../models/SellInfo");
const ClientInfo = require("../../models/ClientInfo");
//@route POST api/admin
//@desc Admin login
//@access Public
router.post("/", async (req, res) => {
  const { clientId, currentDue } = req.body
  try {
    await ClientInfo.updateOne(
      { _id: clientId },
      {
        $set: { due: currentDue },
      }
    );
    const sellInfo = new SellInfo(req.body);
    await sellInfo.save();
    res.status(200).json({
      message: "Memo created",
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
    await SellInfo.find((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "All sell list!",
          status: true,
        });
      }
    }).populate('clientInfo').sort({ createdAt: 'desc' });
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// Sell By ID//
router.get("/:id", async (req, res) => {
  await SellInfo.find({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      let [obj] = data;
      res.status(200).json({
        result: obj,
        message: "Sell by id!",
        status: true,
      });
    }
  });
});

//Update sell
router.put("/:id", async (req, res) => {
  const { clientId, currentDue } = req.body
  try {
    await ClientInfo.updateOne(
      { _id: clientId },
      {
        $set: { due: currentDue },
      }
    );
    await SellInfo.updateOne(
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
            message: "Sell info. were updated successfully!",
            status: true,
          });
        }
      }
    );
  } catch (error) {
    res.status(500).send("Server error");
  }
});


//delete sell
router.delete("/:id", async (req, res) => {
  // const { clientId, currentDue } = req.body
  try {
    // await ClientInfo.updateOne(
    //   { _id: clientId },
    //   {
    //     $set: { due: currentDue },
    //   }
    // );
    await SellInfo.deleteOne({ _id: req.params.id }, (err) => {
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
  } catch (error) {
    res.status(500).send("Server error");
  }
});
module.exports = router;
