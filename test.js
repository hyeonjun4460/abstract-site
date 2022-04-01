class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(newboard) {
        const nameList = [];
        for (let i = 0; i < this.boards.length; i++) {
            nameList.push(this.boards[i].name);
        }
        if (!nameList.includes(newboard.name)) {
            this.boards.push(newboard);
        } else {
            return false;
        }
    }

    findBoardByName(boardName) {
        return this.boards.find((element) => element.name === boardName);
        //  boardname을 파라미터로 주면, newboard를 리턴
    }
}

class Board {
    constructor(name) {
        this.name = name;
    }
}

const _site1 = new Site();
const noticeBoard = new Board('공지사항');
const noticeBoard2 = new Board('하이');
const noticeBoard3 = new Board('공지사항');
_site1.addBoard(noticeBoard);
_site1.addBoard(noticeBoard2);
const nameList = [];
for (let i = 0; i < _site1.boards.length; i++) {
    nameList.push(_site1.boards[i].name);
}
console.log(nameList);
