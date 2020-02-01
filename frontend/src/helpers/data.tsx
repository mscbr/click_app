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
    data.reduce((acc, item, i, src) => {
        if (item.team === team) {
            acc.push(...src.slice(i - 3, i + 4));
        }
        return acc;
    }, [] as {}[]);
