export interface MatchServiceInterface {
    startMatch(data: any): Promise<any>;
    scoreGoal(data: any): Promise<any>;
    startInterval(data: any): Promise<any>;
    additionalTime(data: any): Promise<any>;
    playerSubstitution(data: any): Promise<any>;
    playerAdvertence(data: any): Promise<any>;
    endMatch(data: any): Promise<any>;
}