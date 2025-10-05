const errorHandler = (error, req, res, next) =>  {
    const statusCode = error.status || 500;

    return res.status(500).json({
        success : false,
        error : error.message || "Internal server error occured"
    });
}

export default errorHandler;