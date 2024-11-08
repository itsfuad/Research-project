const actions = [
    {
        name: "Click Profile",
        icon: "<i class='fas fa-user'></i>",
    },
    {
        name: "Open Settings",
        icon: "<i class='fas fa-cog'></i>",
    },
    {
        name: "Scroll Down",
        icon: "<i class='fas fa-arrow-down'></i>",
    },
    {
        name: "Like Post",
        icon: "<i class='fas fa-heart'></i>",
    },
    {
        name: "Comment on Post",
        icon: "<i class='fas fa-comment'></i>",
    },
    {
        name: "Share Post",
        icon: "<i class='fas fa-share'></i>",
    },
    {
        name: "Click Hashtag",
        icon: "<i class='fas fa-hashtag'></i>",
    },
    {
        name: "Click Location",
        icon: "<i class='fas fa-map-marker-alt'></i>",
    },
    {
        name: "Click Profile",
        icon: "<i class='fas fa-user'></i>",
    },
    {
        name: "Click Post",
        icon: "<i class='fas fa-image'></i>",
    },
    {
        name: "Click Comment",
        icon: "<i class='fas fa-comment'></i>",
    },
    {
        name: "Click Share",
        icon: "<i class='fas fa-share'></i>",
    },
    {
        name: "Click Follow",
        icon: "<i class='fas fa-user-plus'></i>",
    },
    {
        name: "Click Unfollow",
        icon: "<i class='fas fa-user-minus'></i>",
    }
]

export function getRandomActions() {
    const randomActions = [];
    const numberOfActions = Math.floor(Math.random() * actions.length);
    for (let i = 0; i < numberOfActions; i++) {
        const randomIndex = Math.floor(Math.random() * actions.length);
        randomActions.push(actions[randomIndex]);
    }
    return randomActions;
}

export function shuffledActions() {
    const shuffled = [];
    const actionsCopy = [...actions];
    while (actionsCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * actionsCopy.length);
        shuffled.push(actionsCopy[randomIndex]);
        actionsCopy.splice(randomIndex, 1);
    }

    return shuffled;
}