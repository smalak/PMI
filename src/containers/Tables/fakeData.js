const tableData = JSON.parse(
  `[{
    "order": 1,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 2,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 3,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 4,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 5,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 6,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 7,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 8,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 9,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 10,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }, {
    "order": 11,
    "surucu": "Lake Zelda",
    "arac": "Lonny79@hotmail.com",
    "skor": "Emelia",
    "sertFren": "Gislason",
    "aniHizlanma": "Kulas Shoals",
    "sertDonus": "52677",
    "hizAsimi": "2016-09-27T08:18:56.302Z"
  }]`,
);
const sortOption = {};
class fakeData {
  constructor(size) {
    this.size = size || 2000;
    this.datas = [];
    this.sortKey = null;
    this.sortDir = null;
  }
  dataModel(index) {
    return tableData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
  getSortAsc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'ASC';
    return this.datas.sort(this.sort);
  }
  getSortDesc(sortKey) {
    sortOption.sortKey = sortKey;
    sortOption.sortDir = 'DESC';
    return this.datas.sort(this.sort);
  }
  sort(optionA, optionB) {
    const valueA = optionA[sortOption.sortKey].toUpperCase();
    const valueB = optionB[sortOption.sortKey].toUpperCase();
    let sortVal = 0;
    if (valueA > valueB) {
      sortVal = 1;
    }
    if (valueA < valueB) {
      sortVal = -1;
    }
    if (sortVal !== 0 && sortOption.sortDir === 'DESC') {
      return sortVal * (-1);
    }
    return sortVal;
  }
}
export default fakeData;
