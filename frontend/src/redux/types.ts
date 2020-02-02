export interface State {
    leaderBoard?: {
        order: number;
        team: string;
        clicks: number;
    }[];
    currentScore?: {
        your_clicks: number;
        team_clicks: number;
    };
}

export interface LeaderBoardItem {
    order: number;
    team: string;
    clicks: number;
}
