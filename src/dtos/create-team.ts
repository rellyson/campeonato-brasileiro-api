import * as yup from "yup";

export class CreateTeamDTO {
    name!: string;
    transactions!: any[];
    city!: string;
    state!: string;
    country!: string;
    stadium!: string;

    constructor(data: {
        name: string,
        transactions: any[],
        city: string,
        state: string,
        country: string,
        stadium: string,
    }
    ) {
        Object.assign(this, data);
    }

    public async validate() {
        const schema = yup.object({
            // TODO: Adicionar validação de campos
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