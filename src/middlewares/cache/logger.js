module.exports = (req, res, next, redisClient) => {

    res.data = null;

    res.on('finish', async () => {

        const currentDate = new Date().toISOString();

        const key = `${req.method}:${currentDate}:${req.originalUrl}`;
        const value = JSON.stringify({
            clave: key,
            time: currentDate,
            req: {
                method: req.method,
                url: req.originalURL,
                headers: req.headers,
                body: req.body
            },
            res: {
                statusCode: res.statusCode,
                statusMessage: res.statusMessage,
                response: req.method === 'GET' ? res.data : ""
            }
        });

        // Imprimir en consola
        console.log(key);
        console.log(value);

        // Guardar en redis
        try {
            await redisClient.set(key, value);
        } catch (error) {
            console.log('Error storing data in redis: ', error);
        }
        
    });

    next();
}