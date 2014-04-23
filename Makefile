
build: components index.js
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components template.js

test:
	@component test phantom

.PHONY: clean test
