# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user_1, user_2, user_3 = User.create([
{name: 'user_1', email: 'user_1@ironhack.com', password: 'ironhack', password_confirmation: 'ironhack'},
{name: 'user_2', email: 'user_2@ironhack.com', password: 'ironhack', password_confirmation: 'ironhack'},
{name: 'user_3', email: 'user_3@ironhack.com', password: 'ironhack', password_confirmation: 'ironhack'}
])

