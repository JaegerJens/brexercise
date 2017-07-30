const reduce = (state, action) => {
    if (!state) {
        return {};
    }
    switch(action.type) {
        case "SHOW_CONTENT":
            const changedNews = {
                ...action.news,
                showFull: !action.news.showFull
            }
            const changedFeed = state.map(p => {
                if (p.id === action.news.id) {
                    return changedNews;
                }
                return p;
            });
            return changedFeed;
        default:
            return state;
    }
}

export {reduce};