// data processing helpers functions

// bp team filter for scoreboard data
export const scoreBoardBandPass = (
    data: {
        order: number;
        team: string;
        clicks: number;
    }[],
    team: string
) =>
    data.filter((item, i, arr) => {
        if (item.team === team) {
            return arr.slice(i - 3, i + 3);
        }
    });
