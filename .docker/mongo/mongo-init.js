db.createUser(
    {
        user: "cbf",
        pwd: "hexajaerealidade",
        roles: [
            {
                role: "readWrite",
                db: "campeonato_brasileiro"
            }
        ]
    }
);