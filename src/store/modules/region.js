const region = {
    state: {
        regions: [
            {
                id: 1,
                name: 'Tashkent',
                regionKey: 'tashkent'
            },
            {
                id: 2,
                name: 'Andijon',
                regionKey: 'andijan'
            },
            {
                id: 3,
                name: 'Namangan',
                regionKey: 'namangan'
            },
            {
                id: 4,
                name: 'Sirdaryo',
                regionKey: 'sirdaryo'
            },
            {
                id: 5,
                name: 'Surxondaryo',
                regionKey: 'termiz'
            },
            {
                id: 6,
                name: 'Qashqadaryo',
                regionKey: 'qarshi'
            },
            {
                id: 7,
                name: 'Xorazm',
                regionKey: 'urganch'
            },
            {
                id: 8,
                name: 'Samarqand',
                regionKey: 'samarkand'
            },
            {
                id: 9,
                name: 'Navoiy',
                regionKey: 'navoiy'
            },
            {
                id: 10,
                name: 'Buxoro',
                regionKey: 'bukhara'
            },
            {
                id: 11,
                name: "Farg'ona",
                regionKey: 'fergana'
            },
            {
                id: 12,
                name: "Qoraqalpog'iston",
                regionKey: 'karakalpakstan'
            },
        ]
    },
    getters: {
        regions(state) {
            return state.regions
        }
    }
}

export default region