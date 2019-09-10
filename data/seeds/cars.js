exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "1GCCS1956Y8235348",
          model: "S 10",
          make: "Chevrolet",
          mileage: 3000,
          transmission: "automatic",
          title: "clean"
        },
        {
          VIN: "2FMZA51665BA05533",
          model: "Freestar ",
          make: "Ford",
          mileage: 5600,
          transmission: "manual",
          title: "salvage"
        },
        {
          VIN: "4F2CU08102KM50866",
          model: "Tribute",
          make: "Mazda",
          mileage: 20000,
          transmission: "automatic",
          title: "clean"
        },
        {
          VIN: "3VWPG71K97M122542",
          model: "Jetta",
          make: "Volkswagen",
          mileage: 35022,
          transmission: "manual",
          title: "salvage"
        },
        {
          VIN: "JH4DB1550LS000111",
          model: "Integra",
          make: "Acura",
          mileage: 243234,
          transmission: "manual",
          title: "salvage"
        }
      ]);
    });
};
