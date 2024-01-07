const express = require('express');
const router = express.Router();

router.post('/fooddata', async (req, res) => {
    try {

        res.send({
            fooddata: global.fooddata,
            foodcategory: global.foodcategory
        });

    } catch (error) {
        console.error(error);
        res.send("Server Error");
    }
});

module.exports = router;
