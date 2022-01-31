import assert from "assert";

const date = new Date("2022-01-31 00:00");

{
  const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-([0-2][1-9]|3[0-1])/;

  const [fill, year, month, day] = regex.exec(date.toISOString());

  const current = `${day}/${month}/${year}`;
  const expected = "31/01/2022";

  assert.equal(current, expected);

  console.log({ current });
}

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

{
  const expected = "31 de janeiro de 2022";
  const actual = date.toLocaleDateString("pt-br", options);
  assert.equal(expected, actual);
}

{
  const expected = "31/01/2022";
  const actual = date.toLocaleDateString("pt-br", {
    ...options,
    month: "numeric",
  });
  assert.equal(expected, actual);
}

// INTL
{
  const actual = new Intl.DateTimeFormat("pt-br").format(date);
  const expected = "31/01/2022";
  assert.equal(expected, actual);
}

{
  const actual = new Intl.DateTimeFormat("pt-br", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
  console.log("actual >>>>", actual);
  const expected = "segunda-feira, 31 de janeiro de 2022 00:00:00 BRT";
  assert.equal(expected, actual);
}
