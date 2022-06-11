# System level tables
## account
   1. id
   2. aid
   3. account_name
   4. domain
   5. ymk_token
   6. me_token
   7. owner_email
   
## account_user
   1. aid
   2. user_email

## admin_users
   1. add aid

## add aid to all tables

# Migration
1. add or remove column, just edit src/api/[entityName]/content-types/[entityName]/schema.json
2. seed data, add a script to database/migrations/
