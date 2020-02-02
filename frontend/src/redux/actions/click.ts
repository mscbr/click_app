export const click = (team: string, session: string) => {
    return {
        type: 'CLICK',
        payload: {
            team,
            session
        }
    };
};
