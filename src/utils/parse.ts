export const serializePort = (port: string | undefined, defaultVault: number): number => {
    try{
        return port && parseInt(port) || defaultVault
    }catch(err){
        return defaultVault
    }
}