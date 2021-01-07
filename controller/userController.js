class UserController {
    constructor(UserService){
        this.UserService = UserService;
    }

    async createUser(req, res) {
        const { body } = req;
        const name = body.name.toLowerCase();

        if (body && body.name && body.password) {
            try {

                const user = await this.UserService.createUser({...body, name});
                console.log(user);
                return res.status(200).json(user);

            } catch(e) {
                return res.status(400);
            }
        } else {
            res.sendStatus(400);
        }
    }
}

module.exports = UserController;

