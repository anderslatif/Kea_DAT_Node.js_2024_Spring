import db from "./connection.js";

const isDeleteMode = true;

if (isDeleteMode) {
    await db.run(`DROP TABLE IF EXISTS volcanoes;`);
    await db.run(`DROP TABLE IF EXISTS villages;`);
}

// DDL
await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    is_active BOOLEAN,
    type TEXT CHECK( type IN ('Caldera', 'Underwater', 'Underground', 'Super Volcanoe') )
)
`);
await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    volcanoe_id INTEGER,
    FOREIGN KEY (volcanoe_id) REFERENCES villages (id)
)
`);

// DML
// seeding 
if (isDeleteMode) {
    await db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Mount St. Helens', TRUE, 'Caldera')`);
    await db.run(`INSERT INTO volcanoes (name, is_active, type) VALUES ('Krakatoa', FALSE, 'Super Volcanoe')`);
    await db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Village 1', 1)`);
    await db.run(`INSERT INTO villages (name, volcanoe_id) VALUES ('Village 2', 1)`);
}







