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

// -- -- //

var domains = getDomains("./domains");
var list = {};

for (let domain in domains) {
	let info = domains[domain].data;
	
	list[domain.domain] = [];
	
	// A Records
	if (domain.record.A) {
		for (let i in domain.record.A) {
			list[domain].push(A(domain.subdomain, domain.record.A[i], domain.proxied));
		}
	}
	
	// AAA Records
	if (domain.record.AAA) {
		for (let i in domain.record.AAA) {
			list[domain].push(AAA(domain.subdomain, domain.record.AAA[i], domain.proxied));
		}
	}
	
	// CNAME Records
	if (domain.record.CNAME) {	
		list[domain].push(CNAME(domain.subdomain, domain.record.CNAME, domain.proxied));
	}
	
	// MX Records
	if (domain.record.MX) {
		for (let i in domain.record.MX) {
			list[domain].push(MX(domain.subdomain, 10, domain.record.MX[i]));
		}
	}
	
	// NS Records
	if (domain.record.NS) {
		for (let i in domain.record.NS) {
			list[domain].push(NS(domain.subdomain, domain.record.NS[i]));
		}
	}
	
	// A Records
	if (domain.record.TXT) {
		for (let i in domain.record.TXT) {
			list[domain].push(TXT(domain.subdomain, domain.record.TXT[i],));
		}
	}
}

for (let domain in list) {
	D(domain, reg_non, provider, list[domain]);
}
