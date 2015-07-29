options( digits = 16 )
library( jsonlite )

n = 5
p = 0.02
x = c( -5, -2.5, 0, 2.5, 5 )
y = pbinom( x, n, p )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p = p,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
