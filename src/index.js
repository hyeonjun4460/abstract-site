class Site {
    constructor() {
        this.boards = []
        this.board = this.boards.find((element) => element)
    }

    addBoard(newboard) {
        if (this.boards.find((element) => element.name === newboard.name)) {
            throw new Error
        } else {
            this.boards.push(newboard)
            newboard.belongInSite = true
        }
    }

    findBoardByName(boardName) {
        return this.boards.find((element) => element.name === boardName);
    }
}

class Board {
    constructor(name) {
        if (name === null || name === '') {
            throw new Error
        }
        else {
            this.belongInSite = false
            this.name = name;
            this.article = []
        }
    }

    publish(article) {
        if (this.belongInSite === false) {
            throw new Error
        } else {
            this.article.push(article)
            article.id = this.name + '-'
            article.belongInBoard = true
        }
    }

    getAllArticles() {
        return this.article
    }
}

class Article {
    constructor({ subject, content, author }) {
        if (subject === null || subject === '' ||
            content === null || content === '' ||
            author === null || author === '') {
            throw new Error
        } else {
            this.subject = subject,
                this.content = content,
                this.author = author,
                this.id = '',
                this.createdDate = new Date().toISOString(),
                this.belongInBoard = false,
                this.comment = []
        }
    }

    startsWith(id) {
        if (id === this.id) {
            return true
        }
    }

    reply(comment) {
        if (this.belongInBoard === false) {
            throw new Error
        } else {
            this.comment.push(comment)
        }
    }

    getAllComments() {
        return this.comment
    }
}

class Comment {
    constructor({ content, author }) {
        if (content === 'null' || content === '' ||
            author === 'null' || author === '') {
            throw new Error
        } else {
            this.content = content,
                this.author = author,
                this.createdDate = new Date().toISOString()
        }
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
