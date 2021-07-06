export class ServerParamError extends Error {
    constructor() {
        super (`Internal server Error`)
        this.name = 'ServerParamError'
    }
}
