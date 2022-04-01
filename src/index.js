class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(newboard) {
        if (this.boards.find((element) => element.name === newboard.name)) {
            throw new Error({ message: 'error' });
        } else {
            this.boards.push(newboard);
        }
    }

    findBoardByName(boardName) {
        return this.boards.find((element) => element.name === boardName);
    }
}

class Board {
    constructor(name) {
        this.name = name;
    }
}

class Article { }

class Comment { }

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
