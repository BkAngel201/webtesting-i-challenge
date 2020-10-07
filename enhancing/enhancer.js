module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement) {
    if (item.enhancement < 20) {
      item.enhancement = item.enhancement + 1;
    } else {
      console.log("enhancement is at maximum value");
    }
  } else {
    console.log("the item has no enhancement property");
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement && item.durability) {
    if (item.enhancement < 15) {
      item.durability = item.durability - 5 >= 0 ? item.durability - 5 : 0;
    } else {
      item.durability = item.durability - 10 >= 0 ? item.durability - 10 : 0;
    }
    if (item.enhancement > 16) {
      item.enhancement = item.enhancement - 1;
    }
  } else {
    console.log("the item has no enhancement or durability properties");
  }
  return { ...item };
}

function repair(item) {
  if (item.durability) {
    item.durability = 100;
  } else {
    console.log("the item has no durability property");
  }
  return { ...item };
}

function get(item) {
  if (item.enhancement && item.name) {
    if (item.enhancement != 0) {
      item.name = `[+${item.enhancement}] ${item.name}`;
    }
  } else {
    console.log("the item has no name or enhancement properties");
  }
  return { ...item };
}
