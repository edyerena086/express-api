module.exports.getItems = (req, res, next) => {
    return res.status(200).json({message: "This is the GET method"})
}