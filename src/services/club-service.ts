import { ClubServiceInterface } from "./interfaces/club-service.interface";

export class ClubService implements ClubServiceInterface {

    getAll() {
        let clubs = [
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
        return clubs;
    }

    findOne(id: string) {
        let club = {};
        // TODO: Implementar busca na base de dados.
        return club;
    }

    // Adicionar modelo club
    create(club: any) {
        // TODO: Implementar inserção na base de dados.
        return club;
    }

    // Adicionar modelo club
    update(id: string, club: any) {
        // TODO: Implementar update na base de dados.
        return club;
    }

    delete(id: string) {
        // TODO: Implementar deleção.
        return id;
    }
}