import swaggerJSDoc from "swagger-jsdoc"
import __dirname from "../utils.js"

const swaggerOptions = {

    definition: {
        openapi: '3.0.1',
        info: {

            title: "Documentación Ecommerce Backend",
            description: "Ecommerce Delfos",

        }

    },

    apis: [`${__dirname}/./docs/**/*.yaml`],
};

const initSwagger = () => {
    const specs = swaggerJSDoc(swaggerOptions);

    return specs

};

export default initSwagger;