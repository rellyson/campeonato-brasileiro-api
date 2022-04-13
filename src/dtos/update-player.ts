import * as yup from "yup";

export class UpdatePlayerDTO {
    fullName!: string
    birthdate!: Date
    country!: string

    constructor(data: { fullName: string, birthdate: Date, country: string }) {
        Object.assign(this, data);
    }

    public async validate() {
        const schema = yup.object({
            fullName: yup.string().required().min(3).max(35),
            birthdate: yup.date().required(),
            country: yup.string().required().min(3)
        });

        return schema.validate(this)
            .then((value) => {
                return value;
            })
            .catch((err) => {
                throw err;
            })
    }
}