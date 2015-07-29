options( digits = 16 )
library( jsonlite )

n = 1
p = 0.5
x = seq( -1000, 1000, 0.5 )
y = pbinom( x, n, p )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p = p,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
