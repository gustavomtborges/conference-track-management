export function splitMinuteAndNameFromTalks(arrayOfTalks) {
  return arrayOfTalks.map((value) => {
    const minutes = value.match(/\d{1,}min|lightning$/);
    minutes[0] =
      minutes[0] === 'lightning' ?
        5 : parseInt(minutes[0].replace('min', ''), 10);

    return { min: minutes[0], name: value };
  });
}

export function sortByLargestToSmallestTalk(arrayOfTalks) {
  return arrayOfTalks.sort((a, b) => b.min - a.min);
}

