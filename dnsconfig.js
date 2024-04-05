// DNS Configuration

var reg_none = NewRegister("none");
var provider = DnsProvider(NewDnsProvider("cloudflare"));

// -- Functions -- //

function getDomains(filepath) {
	var files = glob.apply(null, [filepath, true, ".json"]);
	var domains = [];
	
	for (var i = 0; i < files.length; i++) {
		domains.push(require(files[i]));
	}
	
	return domains;
}

function getInfo() {
	
}

// -- -- //

var domains = getDomains("./domains");

for (var domain in domains) {
	var info = getInfo(domain);
	D();
}

/*
D("sillybilly.club", reg_non, provider,
	/// All the records
	A("subdomain", "value"),
	AAAA("subdomain", "value"),
	CNAME("subdomain", "value"),
	MX("subdomain", 10, "value"),
	TXT("name", "message"),
	NS("subdomain", "value")
)



*/