const express = require('express');
const calculators = require('./calculators');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get('/mean', (req, res, next) => {
    try {
        if (!req.query.nums) throw new ExpressError("No numbers passed.", 400);
        meanParamArray = calculators.paramStringToArray(req.query.nums);
        mean = calculators.mean(meanParamArray);
        if (isNaN(mean)) throw new ExpressError("Not a valid integer.", 400);

        res.json({
            'operation': 'mean',
            'value': mean
        });
    } catch (err) {
        return next(err);
    };
});

app.get('/median', (req, res, next) => {
    try {
        
        median = calculators.median(calculators.paramStringToArray(req.query.nums))
        res.json({
            'operation': 'median',
            'value': median
        });
    } catch (err) {
        return next(err);
    };
});

app.get('/mode', (req, res, next) => {
    try {
        mode = calculators.mode(calculators.paramStringToArray(req.query.nums))
        res.json({
            'operation': 'mode',
            'value': mode
        });
    } catch (err) {
        return next(err);
    };
});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
    return next(err);
    });

//error handler
app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
      error: {message, status}
    });
});



app.listen(3000, function () {
  console.log('The Server is Running......');
})