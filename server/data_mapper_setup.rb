require 'data_mapper'
require 'dm-postgres-adapter'
require './models/scores'

DataMapper.setup(:default, "postgres://localhost/road_to_code_development")
DataMapper.finalize
DataMapper.auto_upgrade!
