import { Team } from "../models/team";

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

    findOne(id: string): Team {
        let team = new Team();
        // TODO: Implementar busca na base de dados.
        return team;
    }

    // Adicionar modelo Team
    create(team: Team): Team {
        // TODO: Implementar inserção na base de dados.
        return team;
    }

    // Adicionar modelo Team
    update(id: string, team: Team) {
        // TODO: Implementar update na base de dados.
        return team;
    }

    delete(id: string) {
        // TODO: Implementar deleção.
        return id;
    }
}