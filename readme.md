# SillyBilly.Club

*SillyBilly.Club* is a free subdomain service that allows one to show the world how silly they are.

## Features

| Features | sillybilly.club |
|:--- |:---:|
| SSL/TLS * | ✅ |
| Enforced HTTPS * | ✅ |
> `*` Only available when proxying is enabled.

## Register

1. [Fork](https://github.com/SillyBilly-Boo/sillybilly.club/fork) this repository.
2. Create a file named `example.json` in the `domains` folder (`example` being the subdomain name).
3. Fill this file with your subdomain information. Please make sure your syntax is valid and follow this format:
```json
{
	"subdomain": "example",
	"description": "Description of your site",
	"owner": {
		"email": "example@example.com",
		"github": "Example",
		"repo": "Example/example-website"
	},

	"record": {
		"A": ["0.0.0.0"],
		"AAAA": ["::1", "::2"],
		"CNAME": "example.com",
		"MX": ["mx1.example.com", "mx2.example.com", "mx3.example.com"],
		"NS": ["ns1.example.com", "ns1.example.com"],
		"TXT": ["verification_example", "000000000"]
	},

	"proxied": false
}

```
4. Submit a pull request and wait for it to be reviewed and merged.
5. After the pull request is merged, please wait up to at least 24 hours for the changes to propagate.

---
