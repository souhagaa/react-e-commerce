export const sortDescBy = (iterable, val) => {
  return iterable.sort((a, b) => a[val] - b[val]);
};

export const sortAscBy = (iterable, val) => {
  return iterable.sort((a, b) => b[val] - a[val]);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-GB");
};

export const sortItemsByNumberElements = (iterable, val) => {
  return iterable.sort((a, b) => b[val].length - a[val].length);
};

export const orderByDate = (iterable, val) => {
  return iterable.sort((a, b) => new Date(b[val]) - new Date(a[val]));
};

export const orderAlpahbetic = (iterable, val) => {
  if (val === "name")
    return iterable.sort((a, b) =>
      (a[val]["firstname"] + a[val]["lastname"]).localeCompare(
        b[val]["firstname"] + b[val]["lastname"]
      )
    );

  return iterable.sort((a, b) => a[val].localeCompare(b[val]));
};

export const filterBy = (iterable, filter, ...val) => {
  if (val.includes("name")) {
    var nestedVal = "firstname";
  }
  return iterable.filter((item) => {
    const regex = new RegExp(`${filter}`, "gi");
    return item[val[0]].match(regex) || item[val[1]][nestedVal].match(regex);
  });
};
