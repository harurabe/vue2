let functions = {
  getYears(numItems) {
    const jpEra = [
      {era: '令和', period: 2019},
      {era: '平成', period: 1989},
      {era: '昭和', period: 1989},
      {era: '大正', period: 1989},
      {era: '明治', period: 1868}
    ];

    let years = [{year: '', text: ''}];
    let startYear = new Date().getFullYear() - numItems;
    let jpyear = 0;
    
    for (let i =0; i < 100; i++) {
      let year = startYear + i;
      for (let j = 0; j < jpEra.length; j++) {
        if (year >= jpEra[j].period) {
          jpyear = jpEra[j].era + (year-jpEra[j].period+1)
          break;
        }
      }
      years.push({ year: year, text: `${year}年(${jpyear})`})
    }
    years.shift()  // 最初の要素(null)を削除
    return years
  }
}

export default functions