export class TeamService {

    getAll() {
        let teams = [
            {
                id: '2d53a2d53d2d5a32d1f5d3a2d',
                name: 'América Mineiro',
                city: 'BH',
                state: 'MG',
                country: 'BR',
                stadium: 'Independência',
            },
            {
                id: '2d53a2d5d2d52s21fd2d2s2sss',
                name: 'Athletico Paranaense',
                city: 'BH',
                state: 'MG',
                country: 'BR',
                stadium: 'Independência',
            },
        ];
        // TODO: Implementar busca na base.
        return teams;
    }

    findOne(id: string) {
        let team = {};
        // TODO: Implementar busca na base de dados.
        return team;
    }

    // Adicionar modelo Team
    create(team: any) {
        // TODO: Implementar inserção na base de dados.
        return team;
    }

    // Adicionar modelo Team
    update(id: string, team: any) {
        // TODO: Implementar update na base de dados.
        return team;
    }

    delete(id: string) {
        // TODO: Implementar deleção.
        return id;
    }
}