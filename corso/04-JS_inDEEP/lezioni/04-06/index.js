let number = 0;

const loggerFn = (arg) => {

    console.log('logggerFn', arg)
}

loggerFn('primo log')

loggerFn('secondo log')

loggerFn('terzo log')

loggerFn(number)

setInterval(() => {
    number = number++
    loggerFn('dentro interval')
}, 5000)

loggerFn('quarto log')