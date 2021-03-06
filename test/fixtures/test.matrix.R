options( digits = 16 )
library( jsonlite )

n = 20
p = 0.1
x = 0:24
y = pbinom( x, n, p )

cat( y, sep = ",\n" )

data = list(
	n = n,
	p = p,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
