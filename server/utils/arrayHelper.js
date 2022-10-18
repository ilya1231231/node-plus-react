const getErrorMsg = (errors) => {
    return errors.array()[0] ? errors.array()[0].msg : 'Ошибка'
}

module.exports = {
    getErrorMsg,
}