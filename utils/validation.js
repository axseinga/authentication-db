import Joi from "joi";

export const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).max(255).required(),
        name: Joi.string().min(2).max(255).required(),
        surname: Joi.string().min(2).max(255).required(),
        email: Joi.string()
            .min(6)
            .max(255)
            .email({ minDomainSegments: 2 })
            .required(),
        password: Joi.string().min(6).required().label("password"),
        repeat_password: Joi.string().required().valid(Joi.ref("password")),
    });

    return schema.validate(data);
};

export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .max(255)
            .email({ minDomainSegments: 2 })
            .required(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
};
