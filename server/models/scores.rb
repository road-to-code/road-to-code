class Score
  include DataMapper::Resource

  property :id,       Serial
  property :name,     String
  property :level,    String
  property :score,    String

end
