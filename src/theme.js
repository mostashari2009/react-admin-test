export const theme = {
    palette: {
        // ...
    },
    overrides: {
        RaMenuItemLink: {
            active: {
                borderLeft: '3px solid #4f3cc9',
            },
            root: {
                borderLeft: '3px solid #fff', // invisible menu when not active, to avoid scrolling the text when selecting the menu
            },
        },
    },
};