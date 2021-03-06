import initConnection from "..";

test("test create database", async () => {
  await initConnection({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [
       "src/database/entity/**/*.ts",
    ],
    migrations: [
       "src/database/migration/**/*.ts",
    ],
    subscribers: [
       "src/database/subscriber/**/*.ts",
    ],
    cli: {
       entitiesDir: "src/database/entity",
       migrationsDir: "src/database/migration",
       subscribersDir: "src/database/subscriber",
    },
  });
});
