const jwt = require('jsonwebtoken');
const fs = require("fs");
const path = require("path");
const { Jimp } = require("jimp");
const axios = require('axios');
const dirPath = "/tmp/udacity"
const { RestError, ResponseFormat } = require('../utils')

class Image {
    constructor(opts) {
    }

    filteredImage = async ({ image_url }) => {

        try {
            try {
                const response = await axios.head(image_url);
                const contentType = response.headers['content-type'];

                if (!contentType || !contentType.startsWith('image/')) {
                    return ResponseFormat.formatResponse(422, 'Image url not valid');
                }
            } catch {
                return ResponseFormat.formatResponse(422, 'Image url not valid');
            }
            console.log(image_url);
            const photo = await Jimp.read(image_url);

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const outpath = `${dirPath}/filtered.${Math.floor(Math.random() * 2000)}.jpg`;
            console.log(outpath);
            await photo
                .resize({ h: 256, w: 256 })
                .greyscale() // set greyscale
                .write(outpath, (img) => {
                    resolve(outpath);
                });
            return ResponseFormat.formatResponse(200, 'Filter Image Successfully');
        } catch (error) {
            throw error;
        }
    }

    deleteAll = async () => {
        try {

            if (!fs.existsSync(dirPath)) {
                return ResponseFormat.formatResponse(200, 'Delete Image successfully');
            }
            let files = fs.readdirSync(dirPath);

            for (let file of files) {
                fs.unlink(path.join(dirPath, file), (err) => {
                    if (err) throw err;
                });
            }
            return ResponseFormat.formatResponse(200, 'Delete Image successfully');
        } catch (error) {
            throw error
        }
    }

}

module.exports = Image
