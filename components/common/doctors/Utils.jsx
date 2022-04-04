export const handleToggle = (checkBoxId, previousState) => {
    const currentIndex = previousState.indexOf(checkBoxId);
    let newCheckedArray = [...previousState];
    if (currentIndex === -1) {
      if (checkBoxId === 0) {
        newCheckedArray = [];
      } else {
        const filtered = newCheckedArray.filter((item) => item !== 0);
        newCheckedArray = [...filtered];
      }
      newCheckedArray.push(checkBoxId);
    } else {
      newCheckedArray.splice(currentIndex, 1);
    }
    return newCheckedArray.sort((a, b) => a - b);
  };