export default class Errorhandler extends Error {
    constructor(
        public statusCode: number,
        public message: string
    ) {
        super();
    }
}