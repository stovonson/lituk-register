![main](https://github.com/user-attachments/assets/7e39c394-4157-45d9-af17-5ccf96107cb2)

## Register

1. [Fork](https://github.com/stovonson/lituk-register/fork) this repository.
2. Create a file named `example.json` in the `domains` folder (`example` being the subdomain name).
3. Fill this file with your subdomain information. Please make sure your syntax is valid and follow this format:
```json
{
	"subdomain": "example",
	"description": "Description of your site",
	"owner": {
		"email": "example@example.com",
		"github": "Example"
	},

	"record": {
		"A": ["0.0.0.0", "0.0.0.0"],
		"CNAME": "example.com.",
		"TXT": [
			["verification_example", "000000000"]
		]
	},

	"proxied": false
}

```
4. Submit a pull request and wait for it to be reviewed and merged.
5. After the pull request is merged, please wait up to at least 24 hours for the changes to propagate.

![plans](https://github.com/user-attachments/assets/f3ff2a43-29ca-4622-ad78-3c98d19fd0d1)

Thanks to [sillybilly.club](https://github.com/SillyBilly-Boo/sillybilly.club) for the original code.
