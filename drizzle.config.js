/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:wjvH2QFRg1Cy@ep-wandering-math-a5kzdqj7.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
};