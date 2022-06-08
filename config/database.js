module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3308),
      database: env('DATABASE_NAME', 'strapi1'),
      user: env('DATABASE_USERNAME', 'mailtrain'),
      password: env('DATABASE_PASSWORD', 'mailtrain'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
